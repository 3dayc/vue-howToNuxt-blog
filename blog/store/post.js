export const state = () => ({
    postList: [],
    tagCloud: [],
    archives: [],
    categoryInfos: []
})

export const actions = {
    //초기 데이터 생성
    async initData({ commit, state }) {
        let postList = [
            {
                id: 1,
                title: "자바스크립트",
                category: { id:1, name: "Vue / Nuxy"},
                content: "우리가 매일 접속하는 웹사이트는 크게 3가지 요소로 구성된다. ‘HTML(Hyper Text Markup Language)’, ‘CSS(Cascading Style Sheets)’, ‘자바스크립트(Javascript)’다. HTML은 웹페이지의 큰 뼈대를 제공하고, CSS는 색깔이나 글씨체와 같은 디자인 요소를 관리한다. 자바스크립트는 크로스 플랫폼(cross platform), 객체지향 스크립트 언어로 웹페이지의 동작을 담당한다. 예를 들어 자바스크립트를 이용하면 ‘버튼을 클릭하면 밑에 날짜를 보여줘’라는 식의 명령을 내릴 수 있다.",
                createAt : new Date('2020-04-11T01:50:00')
            },
            {
                id: 2,
                title: "Vue.js",
                category: { id:2, name: "Vue / Nuxy"},
                content: "Vue.js(간단히 Vue, /vjuː/, 뷰/view)는 웹 애플리케이션의 사용자 인터페이스를 만들기 위해 사용하는 오픈 소스 프로그레시브 자바스크립트 프레임워크이다. 다른 자바스크립트 라이브러리를 사용하는 웹 애플리케이션 프로젝트에 Vue.js를 도입하기 쉽게 설계되어 있는데, 이는 Vue.js가 점진적으로 채택할 수 있게 설계되어 있기 때문이다. 한편 Vue.js는 고성능의 싱글 페이지 애플리케이션(SPA)을 구축하는데 이용가능하다.",
                createAt : new Date('2020-04-11T01:57:00')
            },
            {
                id: 3,
                title: "GraphQL",
                category: { id:3, name: "Vue / Nuxy"},
                content: "그래프QL(영어: GraphQL)은 페이스북이 2012년에 개발하여 2015년에 공개적으로 발표된 데이터 질의어이다. 그래프QL은 REST 및 부속 웹서비스 아키텍쳐를 대체할 수 있다. 클라이언트는 필요한 데이터의 구조를 지정할 수 있으며, 서버는 정확히 동일한 구조로 데이터를 반환한다. 그래프QL은 사용자가 어떤 데이터가 필요한 지 명시할 수 있게 해 주는 강타입 언어이다. 이러한 구조를 통해 불필요한 데이터를 받게 되거나 필요한 데이터를 받지 못하는 문제를 피할 수 있다. 주요 그래프QL 클라이언트로는 아폴로 클라이언트와 Relay 등이 있다. 그래프QL 서버는 여러 언어로 구현되어 있는데, 자바스크립트, 파이썬, 루비, 자바, C#, 스칼라, 고, 엘릭서, 얼랭, PHP, 클로져 등의 언어로 구현되어 있다.",
                createAt : new Date('2020-04-11T02:30:00')
            },
            {
                id: 4,
                title: "node.js",
                category: { id:4, name: "Etc"},
                content: "웹 개발은 크게 둘로 나뉜다. 프론트엔드(Front-end)와 백엔드(Back-end) 기술이다. 프론트엔드는 웹페이지 디자인이나 버튼 기능처럼 사용자가 바로 볼 수 있는 부분이다. 백엔드는 사용자가 눈으로 볼 수 없는 뒷단 기술이다. 백엔드는 서버단 기술이라 불리기도 한다. HTML, CSS 등이 대표적인 프론트엔드 기술이며, DB나 서버를 다루는 부분이 백엔드 기술이다. 자바스크립트는 프론트엔드 분야에서 주로 활용됐다. 그런데 ‘노드JS(Node JS)’가 등장하면서 그 용도가 전혀 달라졌다. 노드JS라는 프레임워크 덕분에 자바스크립트로 서버단 기술까지 제어할 수 있게 된 것이다. 2009년 혜성같이 등장한 노드JS는 웹 개발자에게 많은 관심을 받고 있으며, 최근 재단까지 설립되며 기술 개발이 활발히 이뤄지고 있다.",
                createAt : new Date('2020-05-11T17:44:00')
            },
            {
                id: 5,
                title: "Django",
                category: { id:5, name: "Etc"},
                content: "장고(Django, FAQ 발음으로는 [쟁고])는 파이썬으로 작성된 오픈 소스 웹 애플리케이션 프레임워크로, 모델-뷰-컨트롤러(MVC) 패턴을 따르고 있다. 현재는 장고 소프트웨어 재단에 의해 관리되고 있다. 고도의 데이터베이스 기반 웹사이트를 작성하는 데 있어서 수고를 더는 것이 장고의 주된 목표이다. 장고는 콤포넌트의 재사용성(reusability)과 플러그인화 가능성(pluggability), 빠른 개발 등을 강조하고 있다. 또한, [DRY(Don't repeat yourself: 중복배제)] 원리를 따랐다. 설정 파일부터 데이터 모델에까지 파이썬 언어가 구석구석에 쓰였다. 인스타그램, NASA, 빗버켓, Disqus, 모질라에서 장고를 사용하는 것으로 알려져있다.",
                createAt : new Date('2020-05-11T17:58:00')
            }
        ]

        let tagCloud = [
            "Vue / Nuxt",
            "Etc"
        ]

        let archives = [
            {
                id: 1,
                archiveDate: {
                    year: 2020,
                    month: 4
                },
                count: 3
            },
            {
                id: 2,
                archiveDate: {
                    year: 2020,
                    month: 5
                },
                count: 2
            }
        ]

        let categoryInfos = [
            {
                id: 1,
                name: "Vue / Nuxt",
                count: 3
            },
            {
                id: 2,
                name: "Etc",
                count: 2
            }
        ]

        commit("setPostList", postList)
        commit("setTagCloud", tagCloud)
        commit("setArchives", archives)
        commit("setCategoryInfos", categoryInfos)
    }
}

export const mutations = {
    setPostList(state, postList) {
        state.postList = []
        state.postList = postList
    },

    setTagCloud(state, tagCloud) {
        state.tagCloud = []
        state.tagCloud = tagCloud
    },

    setArchives(state, archives) {
        state.archives = []
        state.archives = archives
    },

    setCategoryInfos(state, categoryInfos) {
        state.categoryInfos = []
        state.categoryInfos = categoryInfos
    }
}

export const getters = {
    getPostList: (state) => {
        return state.postList
    },
    getTagCloud: (state) => {
        return state.tagCloud
    },
    getArchives: (state) => {
        return state.archives
    },
    getCategoryInfos: (state) => {
        return state.categoryInfos
    }
}