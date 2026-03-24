import { readFileSync, writeFileSync, existsSync, readdirSync, unlinkSync } from 'fs';
import { join } from 'path';
import { images as staticImages } from '../data/images.js';

const CONTENT_DIR = join(process.cwd(), 'content');

// ─── Images (merges admin-edited JSON over static defaults) ───
export function getImages() {
  const file = join(CONTENT_DIR, 'images.json');
  if (!existsSync(file)) return staticImages;
  const managed = JSON.parse(readFileSync(file, 'utf-8'));
  return { ...staticImages, ...managed };
}

export function getRawImages() {
  const file = join(CONTENT_DIR, 'images.json');
  return JSON.parse(readFileSync(file, 'utf-8'));
}

export function updateImages(images) {
  const file = join(CONTENT_DIR, 'images.json');
  writeFileSync(file, JSON.stringify(images, null, 2));
  return images;
}

// ─── Site Data (text content) ───
export function getSiteData() {
  const file = join(CONTENT_DIR, 'site.json');
  if (!existsSync(file)) return {};
  return JSON.parse(readFileSync(file, 'utf-8'));
}

export function updateSiteData(data) {
  const file = join(CONTENT_DIR, 'site.json');
  writeFileSync(file, JSON.stringify(data, null, 2));
  return data;
}

// ─── Blog Posts ───
export function getBlogPosts() {
  const dir = join(CONTENT_DIR, 'blog');
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => {
      const data = JSON.parse(readFileSync(join(dir, f), 'utf-8'));
      return { ...data, slug: f.replace('.json', '') };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getBlogPost(slug) {
  const file = join(CONTENT_DIR, 'blog', `${slug}.json`);
  if (!existsSync(file)) return null;
  const data = JSON.parse(readFileSync(file, 'utf-8'));
  return { ...data, slug };
}

export function saveBlogPost(slug, data) {
  const file = join(CONTENT_DIR, 'blog', `${slug}.json`);
  const { slug: _, ...rest } = data;
  writeFileSync(file, JSON.stringify(rest, null, 2));
  return { ...rest, slug };
}

export function deleteBlogPost(slug) {
  const file = join(CONTENT_DIR, 'blog', `${slug}.json`);
  if (existsSync(file)) {
    unlinkSync(file);
    return true;
  }
  return false;
}
