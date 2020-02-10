import { Component, OnInit, Output, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SafePipe } from 'src/app/pipes/safe.pipe';


@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {


  imageClick(modal,url, modalImg){

  modal.style.display = "block";
  modalImg.src = url;
  
}
closeModal(modal){
  
    modal.style.display = "none";
  }

like(post){
this.http.get(`/posts/${post._id}/like`).subscribe(data =>{
  if(data['success']) post.isLiked = true
})
}

  constructor(private http: HttpClient, public safe: SafePipe) {}
  private _url: string = "../../../assets/data/posts.json";
  @Input() public posts;

  ngOnInit() {}
}
