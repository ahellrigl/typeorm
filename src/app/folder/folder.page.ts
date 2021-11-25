import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../entities/post';
import { getRepository, Repository } from 'typeorm';
import { Category } from '../../entities/category';
import { Author } from '../../entities/author';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public savedPost: boolean = false;
  public loadedPost: Post = null;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }


  ionViewDidLoad() {
    this.runDemo();
  }

  async runDemo() {
    const category1 = new Category();
    category1.name = "TypeScript";

    const category2 = new Category();
    category2.name = "Programming";

    const author = new Author();
    author.name = "Person";

    const post = new Post();
    post.title = "Control flow based type analysis";
    post.text = `TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.`;
    post.categories = [category1, category2];
    post.author = author;

    const postRepository = getRepository('post') as Repository<Post>;
    await postRepository.save(post);

    console.log("Post has been saved");
    this.savedPost = true;

    const loadedPost = await postRepository.createQueryBuilder('post')
      .innerJoinAndSelect('post.author', 'author')
      .innerJoinAndSelect('post.categories', 'categories')
      .where('post.id = :id', {id: post.id})
      .getOne();

    console.log("Post has been loaded: ", loadedPost);
    this.loadedPost = loadedPost;
  }

  getCategories() {
    if(this.loadedPost) {
      return this.loadedPost.categories.map(cat => cat.name).join(", ");
    }

    return '';
  }


}
