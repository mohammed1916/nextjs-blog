import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'blogs');

export function getSortedPostsData() {
  const allPostsData = fs.readdirSync(postsDirectory).map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fileContents = fs.readFileSync(path.join(postsDirectory, fileName), 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else return -1;
  });
}