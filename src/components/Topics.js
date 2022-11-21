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
    <div className="xl:flex justify-between align-center">
      {topics.map((topic) => (
        <div key={topic.id} className="flex align-center my-8">
          <div className="mr-6 w-[250px]">
            <img src={topic.img} className="w-full" />
          </div>
          <div>
            <span className="text-blue-grayish font-bold">{topic.order}</span>
            <h3 className="text-blue-dark font-bold">{topic.title}</h3>
            <p className="text-blue-dark-grayish">{topic.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Topics;
