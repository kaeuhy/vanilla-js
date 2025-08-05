export default function CityDetail() {

  // div 요소 생성후 city-detail로 네이밍
  this.$target = document.createElement('div');
  this.$target.className = 'city-detail';

  this.template = () => {};

  this.render = () => {};

  // 상태 변경에 따른 상태값 변경 & 요소 렌더링
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render();
}