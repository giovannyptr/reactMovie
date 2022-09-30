const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '9915f4c77d7241b58285257550f7c002',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig