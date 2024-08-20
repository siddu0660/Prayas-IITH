import { Splide, SplideSlide } from "@splidejs/react-splide";
import dummy from "../../public/Dummy.jpg"
import "@splidejs/react-splide/css";
import "../index.css"

function About () {
    return (
        <div className="flex flex-col mx-auto">
            <div className="text-[#f9f6f0] p-4 flex flex-col m-4 items-center">
                <img src={dummy} alt="dummy" className="rounded-xl max-w-96 mx-auto mb-2"/>
                <span>
                    Lorem ipsum dolor sit amet, sea pertinax pertinacia appellantur in,
                </span>
            </div>
            <div className="rounded-xl text-[#f9f6f0] p-4 flex flex-col m-4">
                <span className="text-4xl font-bold font-serif mx-auto">About Us</span>
                <br/>
                <span className="text-lg font-sans mx-20">
                    Lorem ipsum dolor sit amet, sea pertinax pertinacia appellantur in,
                    est ad esse assentior mediocritatem, magna populo menandri cum te.
                    Vel augue menandri eu, at integre appareat splendide duo. Est ne
                    tollit ullamcorper, eu pro falli diceret perpetua, sea ferri numquam
                    legendos ut. Diceret suscipiantur at nec, his ei nulla mentitum
                    efficiantur. Errem saepe ei vis. Per melius aperiri eu. Et
                    interesset philosophia vim, graece denique intellegam duo at, te vix
                    quot apeirian dignissim. Ei essent percipitur nam, natum possit
                    interpretaris sea ea. Cum assum adipisci cotidieque ut, ut veri
                    tollit duo. Erat idque volutpat mea ut, mel nominati splendide
                    vulputate ea.
                </span>
            </div>
            <div className="rounded-xl text-[#f9f6f0] p-4 flex flex-col m-4">
                <span className="text-4xl font-bold font-serif mx-auto">Events</span>
                <div className="mx-12 my-4">
                    <Splide options={{
                        type    : 'loop',
                        perMove : 1,
                        autoWidth: true,
                        gap     : '1rem',
                    }}>
                        <SplideSlide>
                            <img src={dummy} alt="Image 1"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={dummy} alt="Image 2"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={dummy} alt="Image 3"/>
                        </SplideSlide>
                        <SplideSlide>
                            <img src={dummy} alt="Image 4"/>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </div>
    );
}

export default About