"use client";
import Image from "next/image";

const students = [
  {
    name: "Stanzin Yangdol",
    classYear: "Class 8",
    photo: "/students/stanzin-yangdol.jpg",
    photoPosition: "50% 5%",
    photoZoom: 1.7,
    emoji: "💃",
    quote: "One day, I'll dance on the world's biggest stage!",
    story:
      "I love drawing, dancing, and sports. My dream is to become a choreographer. I also wish to travel to Japan and visit Disneyland someday! I'm thankful to my teachers and sponsors for helping me believe in my dreams every day.",
  },
  {
    name: "Nima Chodon",
    classYear: "Class 8",
    photo: "/students/nima-chosdon.jpg",
    photoPosition: "47% 35%",
    photoZoom: 2.4,
    emoji: "🌈",
    quote: "One day, I'll help people by becoming an IAS officer!",
    story:
      "I enjoy school because I get to take part in activities and sports, like essay writing and dance competitions. My teachers say I have good confidence. I want to become an IAS officer so I can help people and make a difference in my community.",
  },
  {
    name: "Komal Parihar",
    classYear: "Class 6",
    photo: "/students/komal-parihar.jpg",
    photoPosition: "44% 53%",
    photoZoom: 2.2,
    emoji: "📐",
    quote: "Maths is my favorite — I want to be a teacher one day!",
    story:
      "I really like my school because having fewer students means I can learn better and get more chance to participate. I love debates, poems, skits, dance, and volleyball! My dream is to become a Maths teacher, just like my teacher Mam Padma Chondol.",
  },
  {
    name: "Thubstan Deskyong",
    classYear: "Class 2",
    photo: "/students/thubstan-deskyong.jpg",
    photoPosition: "38% 15%",
    photoZoom: 1.9,
    emoji: "🔭",
    quote: "I want to explore the stars!",
    story:
      "I love coming to school because I enjoy learning new things and doing fun activities. I really like art and craft, sports, and reading storybooks like Pinocchio and Aladdin. When I grow up, I want to be a scientist and study astronomy!",
  },
  {
    name: "Jigmet Dolkar",
    classYear: "Class 8",
    photo: null,
    emoji: "✏️",
    quote: "One day I'll write stories that inspire people!",
    story:
      "The teachers are kind and there aren't too many students, so we all get personal attention. I love joining games and competitions, which help me gain confidence. I want to become a fiction writer when I grow up.",
  },
  {
    name: "Jigmet Spaldan",
    classYear: "Class 7",
    photo: "/students/jigmet-spaldan.jpg",
    photoPosition: "48% 47%",
    photoZoom: 3.0,
    emoji: "🏅",
    quote: "I want to join the Army and save my country!",
    story:
      "My father was a brave soldier who gave his life in the Kargil War. I'm very proud of him and want to follow in his footsteps. I love sketching, singing, and playing volleyball. My dream is to join the Indian Army and serve the country.",
  },
];

export default function Students() {
  return (
    <section id="students" className="py-20 bg-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">Meet Our Students</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every student has a story of courage, hope, and determination. Our school welcomes children
            from humble backgrounds, each full of talent and working hard to build a brighter future.
            Through your donations, these students can access education and pursue their dreams,
            turning them into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {students.map((s) => (
            <div key={s.name} className="bg-slate-200 rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="mb-3 flex justify-center">
                {s.photo ? (
                  <div className="rounded-full overflow-hidden w-40 h-40">
                    <Image
                      src={s.photo}
                      alt={s.name}
                      width={160}
                      height={160}
                      className="object-contain w-40 h-40"
                      style={{
                        transformOrigin: s.photoPosition ?? "center",
                        transform: `scale(${s.photoZoom ?? 1})`,
                      }}
                    />
                  </div>
                ) : (
                  <div className="rounded-full w-40 h-40 bg-slate-300" />
                )}
              </div>
              <p className="text-orange-700 font-semibold italic text-sm mb-3">"{s.quote}"</p>
              <h3 className="font-bold text-sky-900 text-lg">{s.name}</h3>
              <p className="text-slate-400 text-sm mb-3">{s.classYear}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{s.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
