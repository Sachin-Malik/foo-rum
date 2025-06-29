import Dexie from "dexie";

export type Post = {
  authorName: string;
  createdAt: string;
  profilePicUrl: string;
  text: string;
  emoji: string;
};

export type DBRecord = {
  id: number;
  authorName: string;
  createdAt: string;
  profilePicUrl: string;
  text: string;
  emoji: string;
};

class DB extends Dexie {
  posts: Dexie.Table<Post, number>;
  constructor() {
    super("DB");
    this.version(1).stores({
      posts: "++id, authorName, createdAt, profilePicUrl, text, emoji",
    });
    this.posts = this.table("posts");
  }

  addPost(record: Post) {
    return this.posts.add(record);
  }

  getPostByProjectId(projectId: string) {
    return this.posts.where("projectId").equals(projectId).toArray();
  }

  getPosts() {
    return this.posts.toArray().then((records) => records.reverse());
  }

  deletePost(id: number) {
    return this.posts.delete(id);
  }

  updatePost(id: number, record: Post) {
    return this.posts.update(id, record);
  }
}

export const db = new DB();
