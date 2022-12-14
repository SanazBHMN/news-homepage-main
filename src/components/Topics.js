import retroPcs from "../assets/images/image-retro-pcs.jpg";
import laptops from "../assets/images/image-top-laptops.jpg";
import gaming from "../assets/images/image-gaming-growth.jpg";

function Topics() {
  const topics = [
    {
      id: 1,
      order: "01",
      title: "Reviving Retro PCs",
      text: "What happens when old PCs are given modern upgrades?",
      img: retroPcs,
    },
    {
      id: 2,
      order: "02",
      title: "Top 10 Laptops of 2022",
      text: "Our best picks for various needs and budgets.",
      img: laptops,
    },
    {
      id: 3,
      order: "03",
      title: "The Growth of Gaming",
      text: "How the pandemic has sparked fresh opportunities.",
      img: gaming,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-10 my-16 xl:grid-cols-3">
      {topics.map((topic) => (
        <div key={topic.id} className="grid grid-cols-1.3 gap-6">
          <img src={topic.img} className="object-cover w-32 h-full" />
          <div className="leading-7">
            <span className="text-blue-grayish text-3xl font-bold">
              {topic.order}
            </span>
            <h3 className="text-blue-dark font-bold cursor-pointer hover:text-red-soft">
              {topic.title}
            </h3>
            <p className="text-blue-dark-grayish">{topic.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Topics;
