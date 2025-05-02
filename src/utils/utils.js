export const autoScrollOnLoadMore = () => {
    scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: "smooth"
    });
}