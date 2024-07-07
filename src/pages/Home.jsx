import { useEffect } from 'react'
import Header from '../components/Header'
import SearchForm from '../components/SearchForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../features/newsSlice'

const Home = () => {
  const dispatch = useDispatch()
  const { articles, term, isLoading } = useSelector((state) => state.news)

  useEffect(() => {
    dispatch(fetchNews(term))
  }, [term])

  return (
    <Header>
      <div className="blogs">
        <div className="news-text px-5">
          <h1 className="text-4xl font-bold text-white text-center mb-4 lg:text-4xl bg-sky-700 p-2 rounded-xl">
            Viewing articles about {term}
          </h1>
          <SearchForm />
        </div>
      </div>
      {isLoading ? (
        <h1 className="text-center mt-20 font-bold text-6xl">Loading...</h1>
      ) : (
        <section className="grid grid-cols-1 gap-10 px-5 pt-10 pb-20">
          {articles.length != 0 ? (
            articles.map((article) => {
              const {
                abstract,
                headline: { main },
                byline: { original },
                _id,
                lead_paragraph,
                news_desk,
                section_name,
                web_url,
                word_count,
              } = article
              return (
                <article
                  key={_id}
                  className="bg-white py-10 px-5 rounded-lg lg:w-9/12 lg:mx-auto"
                >
                  <h2 className="font-bold text-2xl mb-5 lg:text-4xl">
                    {main}
                  </h2>
                  <p>{abstract}</p>
                  <p>{lead_paragraph}</p>
                  <ul className="my-4">
                    <li>{original}</li>
                    <li>
                      <span className="font-bold">News Desk:</span>
                      {news_desk}
                    </li>
                    <li>
                      <span className="font-bold">Section Name:</span>
                      {section_name}
                    </li>
                    <li>
                      <span className="font-bold">Word Count:</span>
                      {word_count}
                    </li>
                  </ul>
                  <a href={web_url} target="_blank" className="underline">
                    Web Resource
                  </a>
                </article>
              )
            })
          ) : (
            <h1 className="text-center mt-20 font-bold text-6xl">
              No articles found
            </h1>
          )}
        </section>
      )}
    </Header>
  )
}
export default Home
