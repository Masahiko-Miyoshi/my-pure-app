import Head from 'next/head';
import CITIES from '../Data/cities.json';
import MapBox,{MoveToCity} from '../MyComponent/MapBox';


function ControlPanel(props) {
  return (
    <div className="control-panel">
      <h3>Camera Transition</h3>
      <p>Smooth animate of the viewport.</p>
      <div className="source-link">
        <a
          href="https://github.com/visgl/react-map-gl/tree/7.0-release/examples/viewport-animation"
          target="_new"
        >
          View Code ↗
        </a>
      </div>
      <hr />

      {CITIES.filter(city => city.state === 'California').map((city, index) => (
        <div key={`btn-${index}`} className="input">
          <input
            type="radio"
            name="city"
            id={`city-${index}`}
            defaultChecked={city.city === 'San Francisco'}
            onClick={() => props.onSelectCity(city)}
          />
          <label htmlFor={`city-${index}`}>{city.city}</label>
        </div>
      ))}
    </div>
  );
}

export default function MyMap() {
  return (
    <div>
      <Head>
        <title>react-map-gl example</title>
      </Head>

      <MapBox />

      <ControlPanel onSelectCity={MoveToCity} />

    </div>
  );
}



// export default function MyMap() {
  
//   const [mode, setMode] = useState(0);
//   const mapRef = useRef();
  
//   const onClick = props =>{
//     // alert('AAA');
//     //props.target.flyTo({center: [140, 36], duration: 3000,zoom: 10});
//     if(mode === 0){
//       mapRef.current?.flyTo({center: [140, 36], duration: 2000, zoom: 10});
//       setMode(1);
//     }
//     else{
//       mapRef.current?.flyTo({center: [135.31, 34.41], duration: 2000, zoom: 10});
//       setMode(0);
//     }
//   };

 
//   const onSelectCity = useCallback(({longitude, latitude}) => {
//     mapRef.current?.flyTo({center: [longitude, latitude], duration: 2000,zoom: 10});
//   }, []);


//   return (
//     <div>
//       <Head>
//         <title>react-map-gl example</title>
//       </Head>

//       <Map
//         ref={mapRef}
//         initialViewState={{
//           latitude: 34.41,
//           longitude: 135.31,
//           zoom: 10,
//           // bearing: 0,
//           //pitch: 0
//            pitch: 85
//         }}
//         terrain= {{
//           source: "mapbox-raster-dem",
//           exaggeration: 1.5
//         }}
//         style={{width: 2000, height: 1000}}
        
//         // mapStyle="mapbox://styles/mapbox/streets-v11"
//         //mapStyle = "mapbox://styles/miyoshimasahiko/ckymdbhj60zo014mob9ayej95"
//         //mapStyle="mapbox://styles/mapbox/dark-v9"
//         mapStyle="mapbox://styles/mapbox/light-v9"
//         mapboxAccessToken={MAPBOX_TOKEN}
//         onClick={onClick}
//       >
//         {/* <Marker longitude={135.31} latitude={34.41} color="red" />
//         <Marker longitude={135.806} latitude={34.952} color="red" /> */}
//       </Map>

//       <ControlPanel onSelectCity={onSelectCity} />

//     </div>
//   );
// }
