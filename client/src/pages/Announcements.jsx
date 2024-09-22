import AnnouncementsCard from "../components/AnnouncementCard";
import dummy from "../../public/Dummy.jpg";
import line from "../../public/line.png";
function Announcements () {
    const data = [
        {
            title: "Event 1",
            photo: dummy,
            date: "2022-01-01",
            time: "10:00 AM",
            venue: "Venue 1",
        },
        {
            title: "Event 2",
            photo: dummy,
            date: "2022-01-01",
            time: "10:00 AM",
            venue: "Venue 2",
        },
        {
            title: "Event 3",
            photo: dummy,
            date: "2022-01-01",
            time: "10:00 AM",
            venue: "Venue 3",
        },
        {
            title: "Event 4",
            photo: dummy,
            date: "2022-01-01",
            time: "10:00 AM",
            venue: "Venue 4",
        },
    ]
    return (
      <div className="flex flex-col min-h-screen">
        <div className="text-3xl font-light tracking-widest w-full text-center m-4 font-montserrat mx-auto">
            A N N O U N C E M E N T S
        </div>
        <img src={line} alt="line" className="mx-auto w-fit scale-x-[0.6] mb-8"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 justify-around">
          {data.map((item, index) => (
            <AnnouncementsCard
              key={index}
              title={item.title}
              photo={item.photo}
              date={item.date}
              time={item.time}
              venue={item.venue}
            />
          ))}
        </div>
      </div>
    );
}

export default Announcements