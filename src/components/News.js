function News() {
  const news = [
    {
      id: 0,
      title: "Hydrogen VS Electric Cars",
      text: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      id: 1,
      title: "The Downsides of AI Artistry",
      text: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      id: 2,
      title: "Is VC Funding Drying Up?",
      text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <div className="bg-blue-dark text-white-off p-5 my-14 lg:my-0">
      <h1 className="text-orange-soft text-3xl font-bold">New</h1>
      <div className="divide-y divide-blue-dark-grayish ">
        {news.map((newsItem) => (
          <div key={newsItem.id} className="py-5 leading-8">
            <h3 className="font-bold cursor-pointer hover:text-orange-soft">
              {newsItem.title}
            </h3>
            <p className="text-blue-grayish">{newsItem.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
