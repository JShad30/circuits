const circuits = [
    {
        id: 1,
        name: "Albert Park",
        location: "Melbourne",
        country: "Australia",
        length: "3.296",
        type: "Street Circuit",
        direction: "Clockwise",
        description: "The Albert Park Circuit is a motorsport street circuit around Albert Park Lake, three kilometres south of central Melbourne. It is used annually as a circuit for the traditional Formula One season-opening Australian Grand Prix, the supporting Supercars Championship Melbourne 400 and other associated support races. The circuit has an FIA Grade 1 license. Although the entire track consists of normally public roads, each sector includes medium to high-speed characteristics more commonly associated with dedicated racetracks facilitated by grass and gravel run-off safety zones that are reconstructed annually. However, the circuit also has characteristics of a street circuit's enclosed nature due to concrete barriers annually built along the Lakeside Drive curve, in particular, where run-off is not available due to the proximity of the lake shore.",
        opened: "1996",
        layout: "assets/images/layouts/melbourne.png",
        photo: "assets/images/photo/melbourne_image.jpg",
        url: "https://www.grandprix.com.au/"
    },
    {
        id: 2,
        name: "Bahrain International Circuit",
        location: "Sakhir",
        country: "Bahrain",
        length: "3.363",
        type: "Road Course",
        direction: "Clockwise",
        description: "The Bahrain International Circuit (Arabic: حلبة البحرين الدولية) is a motorsport venue opened in 2004 and used for drag racing, GP2 Series and the annual Bahrain Grand Prix. The 2004 Grand Prix was the first held in the Middle East. Beginning in 2006, Australian V8 Supercars raced at the BIC, with the event known as the Desert 400. However, the V8 Supercars did not return for the 2011 V8 Supercar season. 24 Hour endurance races are also hosted at BIC. The circuit has a FIA Grade 1 license.",
        opened: "2004",
        layout: "assets/images/layouts/bahrain.png",
        photo: "assets/images/photo/bahrain_image.jpg",
        url: "https://www.bahraingp.com/"
    },
    {
        id: 3,
        name: "Sepang International Circuit",
        location: "Kuala Lumpar",
        country: "Malaysia",
        length: "3.445",
        type: "Road Course",
        direction: "Clockwise",       
        description: "The Sepang International Circuit (Malay: Litar Antarabangsa Sepang) is a motorsport race track in Sepang, Selangor, Malaysia. It is located approximately 45 km (28 mi) south of Kuala Lumpur, and close to Kuala Lumpur International Airport. It hosted the Formula One Malaysian Grand Prix between 1999 and 2017, and is also the venue for the Malaysian Motorcycle Grand Prix, the Malaysia Merdeka Endurance Race and other major motorsport events.",
        opened: "1999",
        layout: "assets/images/layouts/sepang.png",
        photo: "assets/images/photo/sepang_image.jpg",
        url: "https://www.sepangcircuit.com/home"
    },
    {
        id: 4,
        name: "Circuit de Catalunya",
        location: "Barcelona",
        country: "Spain",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",        
        description: "The Circuit de Barcelona-Catalunya is a motorsport race track in Montmeló, Catalonia, Spain. With long straights and a variety of corners, the Circuit de Barcelona-Catalunya is seen as an all-rounder circuit. The track has stands with a capacity of 140,700. The circuit has FIA Grade 1 license. Until 2013 the track was known only as the Circuit de Catalunya, before a sponsorship deal with Barcelona City Council added Barcelona to the track's title.",
        opened: "1991",
        layout: "assets/images/layouts/barcelona.png",
        photo: "assets/images/photo/barcelona_image.jpg",
        url: "https://www.circuitcat.com/en/"
    },
    {
        id: 5,
        name: "Circuit Enzo e Dino Ferrari, Imola",
        location: "Emilia Romagna",
        country: "Italy",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",        
        description: "The Autodromo Internazionale Enzo e Dino Ferrari is a race track in the Italian town Imola, 40 kilometres (24.9 mi) east of Bologna. It is one of the few major international circuits to run in an anti-clockwise direction. The circuit is named after Ferrari's late founder, Enzo Ferrari, and his son, Alfredo Ferrari, who died in 1956 at age 24. The circuit has a FIA Grade One license. It was the venue for the San Marino Grand Prix. For many years, two Grands Prix were held in Italy every year, so the race held at Imola was named after the nearby state. It also hosted the 1980 Italian Grand Prix, although the Italian Grand Prix usually takes place at the Autodromo Nazionale Monza. When Formula One visits Imola, it is seen as the home circuit of Scuderia Ferrari, and masses of supporters come out to support the local team.",
        opened: "1970",
        layout: "assets/images/layouts/imola.png",
        photo: "assets/images/photo/imola_image.jpg",
        url: "http://www.autodromoimola.it/?lang=en"
    },
    {
        id: 6,
        name: "Silverstone",
        location: "Northamptonshire",
        country: "Great Britain",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",        
        description: "Silverstone Circuit is a motor racing circuit in England, near the Northamptonshire villages of Silverstone and Whittlebury. It is the current home of the British Grand Prix, which it first hosted as the 1948 British Grand Prix. The 1950 British Grand Prix at Silverstone was the first race in the newly created World Championship of Drivers. The race rotated between Silverstone, Aintree and Brands Hatch from 1955 to 1986, but settled permanently at the Silverstone track in 1987. The circuit also hosts the British round of the MotoGP series.",
        opened: "1949",
        layout: "assets/images/layouts/silverstone.png",
        photo: "assets/images/photo/silverstone_image.jpg",
        url: "https://www.silverstone.co.uk/"
    },
    {
        id: 7,
        name: "Brands Hatch",
        location: "Kent",
        country: "Great Britain",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",        
        description: "Brands Hatch Circuit is a motor racing circuit in West Kingsdown, Kent, England, United Kingdom. Originally used as a grasstrack motorcycle circuit on farmland, it hosted 12 runnings of the British Grand Prix between 1964 and 1986 and currently hosts many British and International racing events. The venue is owned and operated by Jonathan Palmer's MotorSport Vision organisation.",
        opened: "1960",
        layout: "assets/images/layouts/brands_hatch.png",
        photo: "assets/images/photo/brands_hatch_image.jpg",
        url: "http://www.brandshatch.co.uk/"
    },
    {
        id: 8,
        name: "Daytona International Speedway",
        location: "Daytona, Florida",
        country: "United States",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",
        description: "Daytona International Speedway is a race track in Daytona Beach, Florida, United States. Since opening in 1959, it has been the home of the Daytona 500, the most prestigious race in NASCAR as well as its season opening event. In addition to NASCAR, the track also hosts races of ARCA, AMA Superbike, IMSA, SCCA, and Motocross. The track features multiple layouts including the primary 2.5-mile (4.0 km) high-speed tri-oval, a 3.56-mile (5.73 km) sports car course, a 2.95-mile (4.75 km) motorcycle course, and a 1,320-foot (400 m) karting and motorcycle flat-track. The track's 180-acre (73 ha) infield includes the 29-acre (12 ha) Lake Lloyd, which has hosted powerboat racing. The speedway is operated by International Speedway Corporation pursuant to a lease with the City of Daytona Beach on the property that runs until 2054.",
        opened: 1954,
        layout: "assets/images/layouts/daytona.png",
        photo: "assets/images/photo/daytona_image.jpg",
        url: "https://origin.daytonainternationalspeedway.com/?homepage=true"
    },
    {
        id: 9,
        name: "Spa Francorchamps",
        location: "Kuala Lumpar",
        country: "Malaysia",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",
        description: "The Circuit de Spa-Francorchamps is a motor-racing circuit located in Stavelot, Belgium. It is the current venue of the Formula One Belgian Grand Prix, hosting its first Grand Prix in 1925, and has held a Grand Prix every year since 1985. Spa also hosts several other international events including the 24 Hours of Spa, the World Endurance Championship 6 Hours of Spa-Francorchamps, and the TCR Spa 500. It is also home to the Uniroyal Fun Cup 25 Hours of Spa, one of the longest motor races in the world. The circuit has undergone several redesigns through its history, most extensively in 1979 when the track was modified and shortened from a 14.10 km circuit using public roads to a 6.95 km (4.32 mi) permanent circuit due to safety concerns with the old circuit. Despite its name, the circuit is not in Spa but lies in the vicinity of the town of Francorchamps within the boundaries of the municipality of Stavelot, with a part in the boundaries of Malmedy.",
        layout: "assets/images/layouts/spa.png",
        photo: "assets/images/photo/spa_image.jpg",
        url: "https://www.spa-francorchamps.be/en"
    },
    {
        id: 10,
        name: "Autodromo Nazionale di Monza",
        location: "Monza, Milan",
        country: "Italy",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",
        description: "The Autodromo Nazionale di Monza is a historic race track near the city of Monza, north of Milan, in Italy. Built in 1922, it is the world's third purpose-built motor racing circuit after those of Brooklands and Indianapolis. The circuit's biggest event is the Italian Grand Prix. With the exception of the 1980 running, the race has been hosted there since 1949. Built in the Royal Villa of Monza park in a woodland setting, the site has three tracks – the 5.793-kilometre (3.600 mi) Grand Prix track, the 2.405-kilometre (1.494 mi) Junior track, and a 4.250-kilometre (2.641 mi) high speed oval track with steep bankings which was left unused for decades and had been decaying until it was restored in the 2010s. The major features of the main Grand Prix track include the Curva Grande, the Curva di Lesmo, the Variante Ascari and the Curva Parabolica. The high speed curve, Curva Grande, is located after the Variante del Rettifilo which is located at the end of the front straight or Rettifilo Tribune, and is usually taken flat out by Formula One cars.",
        layout: "assets/images/layouts/monza.png",
        photo: "assets/images/photo/monza_image.jpg",
        url: "https://www.monzanet.it/"
    },
    {
        id: 11,
        name: "Nordschleife, Nurburgring",
        location: "Nurburg",
        country: "Germany",
        length: "15.770",
        type: "Road Course",
        direction: "Clockwise",
        description: "The Nürburgring is a 150,000 person capacity motorsports complex located in the town of Nürburg, Rhineland-Palatinate, Germany. It features a Grand Prix race track built in 1984, and a much longer Nordschleife 'North loop' track which was built in the 1920s around the village and medieval castle of Nürburg in the Eifel mountains. The north loop is 20.8 km (12.9 mi) long and has more than 300 metres (1,000 feet) of elevation change from its lowest to highest points. Jackie Stewart nicknamed the old track 'The Green Hell'. Originally, the track featured four configurations: the 28.265 km (17.563 mi)-long Gesamtstrecke ('Whole Course'), which in turn consisted of the 22.810 km (14.173 mi) Nordschleife ('North Loop'), and the 7.747 km (4.814 mi) Südschleife ('South Loop'). There was also a 2.281 km (1.417 mi) warm-up loop called Zielschleife ('Finish Loop') or Betonschleife ('Concrete Loop'), around the pit area",
        layout: "assets/images/layouts/nurburgring.png",
        photo: "assets/images/photo/nurburgring_image.jpg",
        url: "https://www.nuerburgring.de/en/home.html"
    },
    {
        id: 12,
        name: "Circuit Zandvoort",
        location: "Kuala Lumpar",
        country: "Malaysia",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",
        description: "Circuit Zandvoort, officially CM.com Circuit Zandvoort, known as Circuit Park Zandvoort until 2017 is a motorsport race track located in the dunes north of Zandvoort, Netherlands, near the North Sea coast line. It will return to the Formula One calendar in 2021 as the location of the revived Dutch Grand Prix.",
        layout: "assets/images/layouts/zandvoort.png",
        photo: "assets/images/photo/zandvoort_image.jpg",
        url: "https://www.circuitzandvoort.nl/en/"
    },
    {
        id: 13,
        name: "Luguna Seca",
        location: "Kuala Lumpar",
        country: "Malaysia",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",
        description: "Laguna Seca Raceway (branded as WeatherTech Raceway Laguna Seca, and previously Mazda Raceway Laguna Seca) is a paved road racing track in central California used for both auto racing and motorcycle racing, built in 1957 near both Salinas and Monterey, California, United States. The racetrack is 2.238 miles (3.602 km) long, with a 180 feet (55 m) elevation change. Its eleven turns are highlighted by the circuit's signature turn, the downhill-plunging 'Corkscrew' at Turns 8 and 8A. A variety of racing, exhibition, and entertainment events are held at the raceway, ranging from superkarts to sports car racing to music festivals. Laguna Seca is classified as an FIA Grade Two circuit. The name Laguna Seca is Spanish for 'dry lagoon': the area where the track now lies was once a lake, and the course was built around the dry lake bed. After the course was reconfigured, two artificial ponds were added.",
        layout: "assets/images/layouts/luguna_seca.png",
        photo: "assets/images/photo/luguna_seca_image.jpg",
        url: "https://www.co.monterey.ca.us/government/government-links/weathertech-raceway"
    },
    {
        id: 14,
        name: "Circuit of the Americas",
        location: "Austin, Texas",
        country: "United States",
        length: "3.426",
        type: "Road Course",
        direction: "Anti-clockwise",
        description: "Circuit of the Americas (COTA) is a grade 1 FIA-specification 3.426-mile (5.514 km) motor racing track and facilities located within the extraterritorial jurisdiction of Austin, Texas. The facility is home to the Formula One United States Grand Prix, the IndyCar Classic, and the Motorcycle Grand Prix of the Americas, a round of the FIM Road Racing World Championship, as well a round of the Americas Rallycross Championship. It previously hosted the Australian V8 Supercars, the American Le Mans Series, the Rolex Sports Car Series, the FIA World Endurance Championship, and the IMSA WeatherTech SportsCar Championship. NASCAR will begin racing at the circuit in 2021.",
        opened: "2012",
        layout: "assets/images/layouts/austin.png",
        photo: "assets/images/photo/austin_image.jpg",
        url: "http://circuitoftheamericas.com/"
    },
    {
        id: 15,
        name: "Suzuka Circuit",
        location: "Mie Prefecture",
        country: "Japan",
        length: "3.609",
        type: "Road Course",
        direction: "Clockwise",
        description: "The Suzuka International Racing Course (鈴鹿国際レーシングコース, Suzuka Kokusai Rēsing Kōsu), more famously known as the Suzuka Circuit (鈴鹿サーキット, Suzuka Sākitto), is a motorsport race track located in Ino, Suzuka City, Mie Prefecture, Japan and operated by Mobilityland Corporation, a subsidiary of Honda Motor Co, Ltd. It has a capacity of 155,000.",
        opened: "1962",
        layout: "assets/images/layouts/suzuka.png",
        photo: "assets/images/photo/suzuka_image.jpg",
        url: "https://www.suzukacircuit.jp/en/"
    },
    {
        id: 16,
        name: "Kyalami",
        location: "Kuala Lumpar",
        country: "Malaysia",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",
        description: "Lorem",
        layout: "assets/images/layouts/kyalami.png",
        photo: "assets/images/photo/kyalami_image.jpg",
        url: "https://kyalamigrandprixcircuit.com/"
    },
    {
        id: 17,
        name: "Bathurst",
        location: "Kuala Lumpar",
        country: "Malaysia",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",
        description: "Lorem",
        layout: "assets/images/layouts/bathurst.png",
        photo: "assets/images/photo/bathurst_image.jpg",
        url: "https://www.mount-panorama.com.au/"
    },
    {
        id: 18,
        name: "Circuit de la Sarthe",
        location: "Kuala Lumpar",
        country: "Malaysia",
        length: "3.296",
        type: "Road Course",
        direction: "Clockwise",
        description: "Lorem",
        layout: "assets/images/layouts/le_mans.png",
        photo: "assets/images/photo/le_mans_image.jpg",
        url: "https://www.lemans.org/en"
    },
    {
        id: 19,
        name: "Interlagos",
        location: "Sao Paulo",
        country: "Brazil",
        length: "2.677",
        type: "Road Course",
        direction: "Anti-clockwise",
        description: "The Autódromo José Carlos Pace, better known as Interlagos, is a motorsport circuit located in the city of São Paulo, in the neighborhood of Interlagos. It was renamed after Brazilian Formula One driver Carlos Pace, who died in a plane crash in 1977. It has hosted the Formula One Brazilian Grand Prix since 1973.",
        opened: "1940",
        layout: "assets/images/layouts/interlagos.png",
        photo: "assets/images/photo/interlagos_image.jpg",
        url: "https://www.racingcircuits.info/south-america/brazil/interlagos.html"
    },
    {
        id: 20,
        name: "Indianapolis Motor Speedway",
        location: "Indianapolis, Indiana",
        country: "United States",
        length: "2.500",
        type: "Oval",
        direction: "Anti-clockwise",
        description: "The Indianapolis Motor Speedway is an automobile racing circuit located in Speedway, Indiana in the United States. It is the home of the Indianapolis 500 and the Brickyard 400, and formerly the home of the United States Grand Prix. It is the largest sports venue in the world. It is located on the corner of 16th Street and Georgetown Road, approximately six miles (10 km) west of Downtown Indianapolis. Constructed in 1909, it is the second purpose-built, banked oval racing circuit after Brooklands and the first to be called a 'speedway'. It is the third-oldest permanent automobile race track in the world, behind Brooklands and the Milwaukee Mile. With a permanent seating capacity of 257,325, it is the highest-capacity sports venue in the world.Considered relatively flat by American standards, the track is a 2.5-mile-long (4.0 km) rectangular oval with dimensions that have remained essentially unchanged since its construction. It has two 5⁄8-mile-long (1,000 m) straightaways, four geometrically identical 1⁄4-mile (400 m) turns, connected by two 1⁄8-mile (200 m) short straightaways, termed 'short chutes', between turns 1 and 2, and between turns 3 and 4.",
        opened: "1909",
        layout: "assets/images/layouts/indianapolis.png",
        photo: "assets/images/photo/indianapolis_image.jpg",
        url: "https://www.indianapolismotorspeedway.com/"
    }
]


// Title Variables
const circuit_name = document.getElementById('circuit-name');
const circuit_country = document.getElementById('circuit-country');
const circuit_opening = document.getElementById('circuit-opening');
const circuit_type = document.getElementById('circuit-type');
const circuit_length = document.getElementById('circuit-length');
const circuit_direction = document.getElementById('circuit-direction');

// Circuit Image variables
const circuit_layout = document.getElementById('circuit-layout-image');
const circuit_image = document.getElementById('circuit-photo-image');

// Circuit Link
const circuit_link = document.getElementById('circuit-link');

// Circuit Paragraph
const circuit_description = document.getElementById('circuit-description');

var data = circuits;

let circuit_item = 0;
  
// Next and previous buttons
const next_button = document.getElementById('next-button');
const random_button = document.getElementById('random-button');
const previous_button = document.getElementById('previous-button');

function next_button_clicked() {
    console.log("Next");
    circuit_item += 1;
    if (circuit_item > data.length - 1) {
        circuit_item = 0;
    }
    displayCircuit();
}

function previous_button_clicked() {
    console.log("Previous");
    circuit_item -= 1;
    if (circuit_item < 0) {
        circuit_item = data.length - 1;
    }
    displayCircuit();
}

function random_button_clicked() {
    const randomCircuit = Math.floor(Math.random() * data.length);
    circuit_item = randomCircuit;
    displayCircuit();
}

function displayCircuit() {
    const item = circuits[circuit_item];

    circuit_photo = item.photo;
    circuit_info = item.description;
    circuit_website = item.url;
    circuit_layout_image = item.layout;
    name_of_circuit = item.name;
    location_of_circuit = item.location;
    country_of_circuit = item.country;
    opening_date = item.opened;
    type_of_circuit = item.type;
    direction_of_circuit = item.direction;
    length_of_circuit = item.length;

    var circuit_length_miles = parseFloat(length_of_circuit);
    var circuit_length_km = (circuit_length_miles * 1.609).toFixed(3);
  
    circuit_image.innerHTML = "<img id='circuit-photo-image' src='" + circuit_photo + "' alt='Circuit image'>"; 
    circuit_description.innerHTML = circuit_info;
    circuit_link.innerHTML = "<a href='" + circuit_website + "' target='_blank'>Visit Circuit Website</a>";
    circuit_layout.innerHTML = "<img src='" + circuit_layout_image + "' alt='Circuit layout'></img>";
    circuit_name.innerHTML = name_of_circuit + ",<br>" + location_of_circuit;
    circuit_country.innerHTML = country_of_circuit;
    circuit_opening.innerHTML = "Opened: <b>" + opening_date + "</b>";
    circuit_direction.innerHTML = "Direction: <b>" + direction_of_circuit + "</b>";
    circuit_type.innerHTML = "Type: <b>" + type_of_circuit + "</b>";
    circuit_length.innerHTML = "Length: <b>" + length_of_circuit + " miles / " + circuit_length_km + "km</b>";

    next_button.addEventListener('click', next_button_clicked);
    random_button.addEventListener('click', random_button_clicked);
    previous_button.addEventListener('click', previous_button_clicked);
}

window.addEventListener('DOMContentLoaded', function() {
    displayCircuit();
});
