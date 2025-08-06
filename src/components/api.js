const API_URL = 'https://trip-wiki-api.vercel.app';

export const request = async (startIdx, region, sortBy, searchWord) => {
    try {
        let url = `${API_URL}`;
        // url 뒤쪽에 계속 추가해주는 이유는 url 기준으로 4가지로 나뉘기때문
        if (region && region !== 'All') {
            url += `${region}?start=${startIdx}`;
        } else {
            url += `?start=${startIdx}`;
        }
        if (sortBy) {
            url += `&sort=${sortBy}`
        }
        if (searchWord) {
            url += `&search=${searchWord}`
        }

        // response 변수를 선언하여 api 호출
        const response = await fetch(url);
        if (response) {
            let data = await response.json();
            return data;
        }
    } catch (err) {
        console.log(err);
    }
}