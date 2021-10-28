import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  const offers = [
    {
      title: "Sundarban 4 day 3 night tour",
      img: "https://www.travelmate.com.bd/wp-content/uploads/2021/06/Sundarbans-Mangrove.jpg",
      price: 12000,
      descriprion: "The Sundarbans is a vast mangrove forest on the coast of the Bay of Bengal, one of the natural wonders of the world. Located in the delta of the Ganges, Meghna and Brahmaputra river basins, this magnificent forest covers Khulna, Satkhira and Bagerhat districts of Bangladesh and two districts of the Indian state of West Bengal, North 24 Parganas and South 24 Parganas."
    },
    {
      title: "Mahasthangarh day long tour",
      img: "https://www.travelmate.com.bd/wp-content/uploads/2021/05/mahasthangarh-bogura-tm-1140x530.jpg",
      price: 2000,
      descriprion: "The vast ruins wall of Mahasthangarh (মহাস্থানগড়) is a silent witness to the glorious history of Pundranagar (Pundranagara), the capital of Paundravardhanapura, which has a glorious history of nearly two and a half thousand years"
    },
    {
      title: "Sitakunda 3 day 2 night tour",
      img: "https://www.travelmate.com.bd/wp-content/uploads/2021/05/suptodhara-jhorna-sitakunda.jpg",
      price: 6000,
      descriprion: "Sitakunda (সীতাকুন্ড) is an upazila in Chittagong which is currently at the peak of popularity among tourists. Fountains, mountains, Waterfalls, Beach, clouds, you can enjoy everything from here? Actually, this is the reason why innumerable tourists are going to Sitakundo every day. Some are camping while"
    },
    {
      title: "Bandarban 3 day 2 night tour",
      img: "https://www.travelmate.com.bd/wp-content/uploads/2021/04/Chimbuk-Hilly-Slope.jpg",
      price: 6500,
      descriprion: "The Chimbuk hills Or Pahar (চিম্বুক পাহাড়) of Bandarban, known as Darjeeling in Bengal. Chimbuk is the third largest mountain in Bangladesh. Chimbuk is a well-known name all over the country. Chimbuk hill is located 26-28 km from Bandarban district town. It is about 2500 feet above sea level"
    },
    {
      title: "Sajek 2 day 1 night tour",
      img: "https://www.travelmate.com.bd/wp-content/uploads/2021/04/Chimbuk-Pahar-Surroundings.jpg",
      price: 5500,
      descriprion: "Another specialty of Chimbuk is the fruit of the mountain that matches the twelve months just down the road. Papaya, banana, sugarcane, green coconut, sherifa, orange, plum are available according to the season. However, bananas and papayas are available all year round. All fruits are fresh"
    },
    {
      title: "Dim Pahar daylong tour",
      img: "https://www.travelmate.com.bd/wp-content/uploads/2021/03/Dim-Pahar-Bandarban-1000x530.jpg",
      price: 3500,
      descriprion: "Dim Pahar is a hill located in Bandarban district of Bangladesh. The hill is located right in the middle of Alikadam and Thanchi upazilas. The boundaries of the two police stations have been determined by this hill. The highest road in Bangladesh has been built through this hill at an altitude of two and a"
    },
    {
      title: "Srimangal 2 day 1 night tour",
      img: "https://www.travelmate.com.bd/wp-content/uploads/2021/03/Malnicherra-Cha-Bagan-1000x530.jpg",
      price: 5000,
      descriprion: "Malnichhara Tea Garden is the largest and first established tea garden in Bangladesh and the subcontinent which is located in Sylhet Sadar Upazila. The first tea garden in the subcontinent, Malnichhara, was established in 1849 on an area of ​​1500 acres by Mr. Hudson.  the tea garden is currently under private supervision."
    },
    {
      title: "Sylet 3 day 2 night tour",
      img: "https://www.travelmate.com.bd/wp-content/uploads/2021/03/Lakkatura-Tea-State-1000x530.jpg",
      price: 6500,
      descriprion: "Lakkatura Tea Garden is located near Osmani Airport in Chowkidhenki Upazila of Sylhet District. Lakkatura Tea Garden is the green forest surrounding the northern edge of Sylhet city. It is an official tea garden under the National Tea Board. It covers an area of ​​1293 hectares or about 3200 acres. From Amberkhana Point in Sylhet,"
    },
    {
      title: "Nilachal bandarban Day-Long tour",
      img: "https://www.travelmate.com.bd/wp-content/uploads/2021/02/nilachal-tour-bandarban.jpg",
      price: 2500,
      descriprion: "The two most popular tourist destinations in Bandarban are Nilachal and Nilgiri. It is located on the top of a secluded hill, these two places attract tourists all year round. Nilachal is probably the most beautiful tourist destination in Bandarban district. About 1600 to 2000 feet above sea level, this place in rainy, autumn or"
    }

  ]
  console.log(JSON.stringify(offers))
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
