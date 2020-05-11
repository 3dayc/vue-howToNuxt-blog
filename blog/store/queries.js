export function fetchList(pageSize, currentPage) {
    return `{
        posts(pageSize:${pageSize}, currentPage:${currentPage}) {
          id
          title
          category {
            id
            name
          }
          content
          createAt
        }
        totalCount
      }
      `
}