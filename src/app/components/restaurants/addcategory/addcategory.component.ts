import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantCategoriesService } from 'src/app/services/restaurantcategories.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  prodCategoryBool: boolean = true;
  productCategoryForm:FormGroup = new FormGroup({});
  loader : boolean = false;
  tempFile: any;

  @Input()
  public categoryInfo:any;

  @Output()
  public closeModel: EventEmitter<void> = new EventEmitter<void>();
  public errResponse: string ="";

  constructor( private modalService: NgbModal,  private fb:FormBuilder, private categoryService: RestaurantCategoriesService) { }

  ngOnInit(): void {
    if(this.categoryInfo) {
      this.initialForm(this.categoryInfo);
    } else{
      this.initialForm();
    }
   
  }

  initialForm(productCategoryObj: any = null) {
    if (productCategoryObj === null) {
      this.productCategoryForm = this.fb.group({
        categoryName: ["", Validators.required],
        categoryDescription: ["", Validators.required],
        categoryImageUrl: [""],
        categoryId: [null],
        active: [true],
        addedOn: [],
      });
    } else {
      this.productCategoryForm = this.fb.group({
        categoryName: [productCategoryObj.categoryName, Validators.required],
        categoryDescription: [productCategoryObj.categoryDescription, Validators.required],
        categoryImageUrl: [productCategoryObj.categoryImageUrl],
        categoryId: [productCategoryObj.categoryId],
        active: [productCategoryObj.active],
      });
    }
  }

  onSubmit() {
    if(this.productCategoryForm.valid) {
      if(this.productCategoryForm.get('categoryId')?.value) {
        this.handleUpdate();
      } else{
        this.handleCreate();
      }
    } else{
      this.errResponse = "Enable to submit form, Invalid form data";
      console.log("Invalid Form");
    }
  }

  handleCreate() {
    this.categoryService.add(this.productCategoryForm.getRawValue()).subscribe((response:any)=>{
      // console.log(response);
      // this.router.navigateByUrl('/users');
      window.location.href ="/products/restaurantRestaurantCategories";
      this.close();
      },error =>{
        this.errResponse = error.error.message;
      })
  }

  handleUpdate() {
    this.categoryService.update(this.productCategoryForm.getRawValue()).subscribe((response:any)=>{
      // console.log(response);
      window.location.href ="/products/restaurantRestaurantCategories";
        this.close();
      },error =>{
        this.errResponse = error.error.message;
      })
  }

  checkFileType(event: any) {
    this.tempFile = event.target.files[0];
    if (
      this.tempFile.type == "image/png" ||
      this.tempFile.type == "image/jpeg" ||
      this.tempFile.type == "image/jpg"
    ) {
      // console.log("File Ok");
    } else {
      // console.log("File not Ok");
      this.tempFile = null;
      // this.toast.show("Only .png/.jpeg/.jpg file format accepted!!");
    }
  }

  close() {
    this.closeModel.emit();
  }
}
