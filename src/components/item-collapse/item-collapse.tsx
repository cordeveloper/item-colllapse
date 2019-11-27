import { Component, Prop, h, Host, Watch } from "@stencil/core";

@Component({
  tag: "item-collapse",
  styleUrl: "item-collapse.css"
})
export class itemCollapse {

  @Prop({reflect: true, mutable: true}) open: boolean;
  main!: HTMLElement;
  content!: HTMLElement;
  icon!: HTMLElement;
  height: string;
  block: boolean = false;

  @Watch('open') 
  watchOpen(newValue: boolean, oldValue: boolean) {
    if(newValue !== oldValue) this.handleClick();
  }
 
  toggle():void {
    if(!this.block){
      if(this.open) {
        this.open = false;
      } else {
        this.open = true;
      }
    }

  }

  handleClick() {
    if(!this.block){
      this.block = true;
      if(!this.open) {
        setTimeout( () => {
          this.main.style.height = "0";
        }, 200 );
        this.content.style.transform = "translateY(-100%)";
        this.icon.style.transform = "rotate(0deg)";
      } else {
        
        this.main.style.height = "auto";
        this.content.style.transform = "translateY(0)";
        this.icon.style.transform = "rotate(-180deg)";
      }
      setTimeout( () => {
        this.block = false;
      }, 200 );

    }
  }

  componentDidLoad() {
    if(this.open){
      this.main.style.height = "auto";
      this.content.style.transform = "translateY(0)";
      this.icon.style.transform = "rotate(-180deg)";
    }
  }

  
  render() {
    return (
      <article class="item-collapse__container">
        <header class="item-collapse__header" onClick={() => this.toggle()}>
          <h3 class="item-collapse__title">Title</h3>
          <i class="item-collapse__icon" ref={el => this.icon = el as HTMLElement}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="svg-default"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </i>
        </header>
        <main class="item-collapse__main" ref={el => this.main = el as HTMLElement}>
          <section class="item-collapse__content" ref={el => this.content = el as HTMLElement}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, possimus quas magnam fugit officiis suscipit. Sequi ipsam, est at consequatur molestias aperiam rem dicta corporis qui fugit aliquam atque odit.
          </section>
        </main>
      </article>
    );
  }
}
