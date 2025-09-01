import CityList from "./components/CityList";
import CityDetail from "./components/CityDetail";
import RegionList from "./components/RegionList";
import Header from "./components/Header";
import {request} from "./components/api";

export default function App($app) {
    // 페이지에서 필요한 state 초기화
    this.state = {
        // 몇 번째 데이터부터 불러올지에 대한 state 초기화
        startIdx: 0,
        // 정렬 필터에 대한 state 초기화
        sortBy: '',
        // 검색에 대한 state 초기화
        searchWord: '',
        // 지역 선택에 대한 state 초기화
        region: '',
        // 조건에 맞는 도시 state 초기화
        cities: '',
    };

    const header = new Header();
    const regionList = new RegionList();
    const renderCityList = () => {
        new CityList({
            $app,
            initialState: this.state.cities,
            handleItemClick: async (id) => {
                history.pushState(null, null, `/city/${id}`);
                this.setState({
                    ...this.state,
                    currentPage: `/city/${id}`,
                });
            },
            handleLoadMore: async () => {
                const newStartIdx = this.state.startIdx + 40;
                const newCities = await request(newStartIdx, this.state.region, this.state.sortBy);
                this.setState({
                    ...this.state,
                    startIdx: newStartIdx,
                    cities: {
                        ...this.state.cities,
                        cities: [...this.state.cities.cities, ...newCities.cities],
                        isEnd: newCities.isEnd,
                    },
                });
            },
        });
    };
    const cityDetail = new CityDetail();

    this.setState = (newState) => {
        this.state = newState;
        cityList.setState(this.state.cities);
    };

    const init = async () => {
        const cities = await request(this.state.startIdx, this.state.region, this.state.sortBy, this.state.searchWord);
        this.setState({
            ...this.state,
        })
    };

    init();
}