export default function Header() {

  // div 요소 생성후 header로 네이밍
  this.$target = document.createElement('div');
  this.$target.className = 'header';

  this.template = () => {};

  this.render = () => {};

  // 상태 변경에 따른 상태값 변경 & 요소 렌더링
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render();
}