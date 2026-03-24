import { useState, useEffect } from 'react';

function LoginForm({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      onLogin();
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-900">
      <form onSubmit={handleSubmit} className="card p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h1>
        {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-3 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none mb-4"
        />
        <button type="submit" className="btn-primary w-full py-3">Sign In</button>
      </form>
    </div>
  );
}

function ImageEditor() {
  const [images, setImages] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('/api/images').then((r) => r.json()).then(setImages);
  }, []);

  const handleChange = (key, value) => {
    setImages((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleSave = async () => {
    setSaving(true);
    await fetch('/api/images', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(images),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (!images) return <p className="text-gray-400">Loading...</p>;

  const entries = Object.entries(images).filter(([key]) =>
    key.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Images</h2>
        <button onClick={handleSave} disabled={saving} className="btn-primary text-sm px-5 py-2">
          {saving ? 'Saving...' : saved ? 'Saved!' : 'Save All Changes'}
        </button>
      </div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter images..."
        className="w-full px-4 py-2 bg-navy-700 border border-navy-600 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none mb-6"
      />
      <div className="space-y-4">
        {entries.map(([key, url]) => (
          <div key={key} className="card p-4">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-navy-700 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                {url ? (
                  <img src={url} alt={key} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                ) : null}
                <span className="text-gray-600 text-xs" style={{ display: url ? 'none' : 'block' }}>No image</span>
              </div>
              <div className="flex-1 min-w-0">
                <label className="text-gold-400 text-sm font-semibold block mb-1">{key}</label>
                <input
                  type="url"
                  value={url || ''}
                  onChange={(e) => handleChange(key, e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3 py-2 bg-navy-700 border border-navy-600 rounded text-white text-sm placeholder-gray-500 focus:border-gold-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BlogEditor() {
  const [posts, setPosts] = useState(null);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', excerpt: '', category: '', date: '', readTime: '', content: [''] });

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    fetch('/api/blog').then((r) => r.json()).then(setPosts);
  };

  const handleEdit = (post) => {
    setEditing(post.slug);
    setForm({
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      date: post.date,
      readTime: post.readTime,
      content: post.content || [''],
    });
  };

  const handleNew = () => {
    setEditing('__new__');
    setForm({ title: '', excerpt: '', category: 'Getting Started', date: new Date().toISOString().split('T')[0], readTime: '5 min read', content: [''] });
  };

  const handleSave = async () => {
    const slug = editing === '__new__'
      ? form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      : editing;

    const method = editing === '__new__' ? 'POST' : 'PUT';
    const url = editing === '__new__' ? '/api/blog' : `/api/blog/${slug}`;

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, slug }),
    });
    setEditing(null);
    loadPosts();
  };

  const handleDelete = async (slug) => {
    if (!confirm('Delete this post?')) return;
    await fetch(`/api/blog/${slug}`, { method: 'DELETE' });
    loadPosts();
  };

  const updateContent = (index, value) => {
    const newContent = [...form.content];
    newContent[index] = value;
    setForm((prev) => ({ ...prev, content: newContent }));
  };

  const addParagraph = () => {
    setForm((prev) => ({ ...prev, content: [...prev.content, ''] }));
  };

  const removeParagraph = (index) => {
    setForm((prev) => ({ ...prev, content: prev.content.filter((_, i) => i !== index) }));
  };

  if (!posts) return <p className="text-gray-400">Loading...</p>;

  if (editing) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">{editing === '__new__' ? 'New Post' : 'Edit Post'}</h2>
          <div className="flex gap-3">
            <button onClick={() => setEditing(null)} className="btn-ghost text-sm px-4 py-2">Cancel</button>
            <button onClick={handleSave} className="btn-primary text-sm px-5 py-2">Save Post</button>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-gray-300 text-sm font-medium block mb-1">Title</label>
            <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-4 py-2 bg-navy-700 border border-navy-600 rounded-lg text-white focus:border-gold-500 focus:outline-none" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-300 text-sm font-medium block mb-1">Category</label>
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-4 py-2 bg-navy-700 border border-navy-600 rounded-lg text-white focus:border-gold-500 focus:outline-none">
                {['Getting Started', 'Deal Analysis', 'Property Management', 'Financing', 'Market Analysis', 'Scaling'].map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-gray-300 text-sm font-medium block mb-1">Date</label>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-2 bg-navy-700 border border-navy-600 rounded-lg text-white focus:border-gold-500 focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="text-gray-300 text-sm font-medium block mb-1">Read Time</label>
            <input type="text" value={form.readTime} onChange={(e) => setForm({ ...form, readTime: e.target.value })} className="w-full px-4 py-2 bg-navy-700 border border-navy-600 rounded-lg text-white focus:border-gold-500 focus:outline-none" placeholder="5 min read" />
          </div>
          <div>
            <label className="text-gray-300 text-sm font-medium block mb-1">Excerpt</label>
            <textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} rows={2} className="w-full px-4 py-2 bg-navy-700 border border-navy-600 rounded-lg text-white focus:border-gold-500 focus:outline-none resize-none" />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-gray-300 text-sm font-medium">Content Paragraphs</label>
              <button onClick={addParagraph} className="text-gold-400 text-sm hover:text-gold-300">+ Add Paragraph</button>
            </div>
            {form.content.map((p, i) => (
              <div key={i} className="mb-3 flex gap-2">
                <textarea
                  value={p}
                  onChange={(e) => updateContent(i, e.target.value)}
                  rows={3}
                  className="flex-1 px-4 py-2 bg-navy-700 border border-navy-600 rounded-lg text-white focus:border-gold-500 focus:outline-none resize-none"
                  placeholder={`Paragraph ${i + 1}`}
                />
                {form.content.length > 1 && (
                  <button onClick={() => removeParagraph(i)} className="text-red-400 hover:text-red-300 px-2" title="Remove">×</button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Blog Posts ({posts.length})</h2>
        <button onClick={handleNew} className="btn-primary text-sm px-5 py-2">+ New Post</button>
      </div>
      <div className="space-y-3">
        {posts.map((post) => (
          <div key={post.slug} className="card p-4 flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold">{post.title}</h3>
              <p className="text-gray-500 text-sm">{post.category} · {post.date} · {post.readTime}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(post)} className="text-gold-400 hover:text-gold-300 text-sm font-medium px-3 py-1">Edit</button>
              <button onClick={() => handleDelete(post.slug)} className="text-red-400 hover:text-red-300 text-sm font-medium px-3 py-1">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Dashboard</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Images</h3>
          <p className="text-gray-400 text-sm mb-4">Update image URLs across the site. Fix broken images or swap in new ones.</p>
        </div>
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Blog Posts</h3>
          <p className="text-gray-400 text-sm mb-4">Create, edit, and delete blog posts. Manage all your content in one place.</p>
        </div>
      </div>
    </div>
  );
}

export default function AdminApp() {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    // Check if already logged in by trying to fetch images
    fetch('/api/images')
      .then((r) => {
        setAuthed(r.ok);
        setChecking(false);
      })
      .catch(() => setChecking(false));
  }, []);

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    setAuthed(false);
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-900">
        <div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!authed) {
    return <LoginForm onLogin={() => setAuthed(true)} />;
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'images', label: 'Images' },
    { id: 'blog', label: 'Blog' },
  ];

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Admin Header */}
      <header className="bg-navy-800 border-b border-navy-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <a href="/" className="text-gold-400 font-bold text-lg">CDS Admin</a>
            <nav className="flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-gold-500 text-navy-900'
                      : 'text-gray-400 hover:text-white hover:bg-navy-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-gray-400 hover:text-white text-sm">View Site</a>
            <button onClick={handleLogout} className="text-gray-400 hover:text-red-400 text-sm">Logout</button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'images' && <ImageEditor />}
        {activeTab === 'blog' && <BlogEditor />}
      </div>
    </div>
  );
}
