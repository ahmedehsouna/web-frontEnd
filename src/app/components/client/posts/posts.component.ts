import { Component, OnInit, Output, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {


  imageClick(modal,url, modalImg){
    // Get the modal
// var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = url;
  // captionText.innerHTML = this.alt;


// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
  // }
}
closeModal(modal){
  
    modal.style.display = "none";
  }

  constructor(private http: HttpClient) {}
  private _url: string = "../../../assets/data/posts.json";
  @Input() public posts;

  ngOnInit() {}
}
