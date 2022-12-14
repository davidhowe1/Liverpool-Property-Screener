const splashScreen = document.getElementById('splash-screen');

window.onload = function() {
    splashScreen.classList.add('inactive')

    function removeLoadingScreen() {
        splashScreen.remove()
    }

    setTimeout(removeLoadingScreen, 1500)
}

const propertyListings = [

    {
    image: 'https://media.rightmove.co.uk/75k/74061/127067960/74061_HSS248313_IMG_02_0000.jpeg',
    address: 'Finch Lea Drive, Liverpool, L14',
    description: 'A bright modern two bedroom apartment situated on the first floor of this popular development on Highfield Street which runs parallel with Pall Mall close to its junction with Leeds Street. The property is close to Liverpool John Moores University and immediate vacant possession is available upon completion.',
    price: 120000,
    bedrooms: 3,
    bathrooms: 1,
    type: 'Semi-Detached',
    newHome: 'New Home',
    recentlyAdded: '',
    },

    {   
    image: 'https://media.rightmove.co.uk/120k/119425/126063677/119425_SEF220610_IMG_00_0000.jpeg',
    address: 'Harris Drive, Liverpool, L20',
    description: 'A bright modern two bedroom apartment situated on the first floor of this popular development on Highfield Street which runs parallel with Pall Mall close to its junction with Leeds Street. The property is close to Liverpool John Moores University and immediate vacant possession is available upon completion.',
    price: 160000,
    bedrooms: 3,
    bathrooms: 1,
    type: 'Semi-Detached',
    newHome: '',
    recentlyAdded: 'Recently Added',
    },

    {
    image: 'https://media.rightmove.co.uk/204k/203528/127002389/203528_1433138-1_IMG_00_0000.jpeg',
    address: 'Carnarvon Road, Liverpool, L9',
    description: 'A bright modern two bedroom apartment situated on the first floor of this popular development on Highfield Street which runs parallel with Pall Mall close to its junction with Leeds Street. The property is close to Liverpool John Moores University and immediate vacant possession is available upon completion.',
    price: 89950,
    bedrooms: 3,
    bathrooms: 1,
    type: 'Terraced',
    newHome: '',
    recentlyAdded: 'Recently Added',
    },

    {
    image: 'https://media.rightmove.co.uk/73k/72919/129159044/72919_18276_IMG_00_0000.jpeg',
    address: '41 Butterfield Street, Liverpool',
    description: 'A bright modern two bedroom apartment situated on the first floor of this popular development on Highfield Street which runs parallel with Pall Mall close to its junction with Leeds Street. The property is close to Liverpool John Moores University and immediate vacant possession is available upon completion.',
    price: 60000,
    bedrooms: 2,
    bathrooms: 1,
    type: 'Terraced',
    newHome: '',
    recentlyAdded: 'Recently Added',
    },

    {
    image: 'https://media.rightmove.co.uk/75k/74061/127067960/74061_HSS248313_IMG_02_0000.jpeg',
    address: 'Finch Lea Drive, Liverpool, L14',
    description: 'A bright modern two bedroom apartment situated on the first floor of this popular development on Highfield Street which runs parallel with Pall Mall close to its junction with Leeds Street. The property is close to Liverpool John Moores University and immediate vacant possession is available upon completion.',
    price: 120000,
    bedrooms: 3,
    bathrooms: 1,
    type: 'Semi-Detached',
    newHome: 'New Home',
    recentlyAdded: '',
    },

    {   
    image: 'https://media.rightmove.co.uk/120k/119425/126063677/119425_SEF220610_IMG_00_0000.jpeg',
    address: 'Harris Drive, Liverpool, L20',
    description: 'A bright modern two bedroom apartment situated on the first floor of this popular development on Highfield Street which runs parallel with Pall Mall close to its junction with Leeds Street. The property is close to Liverpool John Moores University and immediate vacant possession is available upon completion.',
    price: 160000,
    bedrooms: 3,
    bathrooms: 1,
    type: 'Semi-Detached',
    newHome: 'New Home',
    recentlyAdded: 'Recently Added',
    },

    {
    image: 'https://media.rightmove.co.uk/204k/203528/127002389/203528_1433138-1_IMG_00_0000.jpeg',
    address: 'Carnarvon Road, Liverpool, L9',
    description: 'A bright modern two bedroom apartment situated on the first floor of this popular development on Highfield Street which runs parallel with Pall Mall close to its junction with Leeds Street. The property is close to Liverpool John Moores University and immediate vacant possession is available upon completion.',
    price: 89950,
    bedrooms: 3,
    bathrooms: 1,
    type: 'Terraced',
    newHome: '',
    recentlyAdded: 'Recently Added',
    },

    {
    image: 'https://media.rightmove.co.uk/73k/72919/129159044/72919_18276_IMG_00_0000.jpeg',
    address: '41 Butterfield Street, Liverpool',
    description: 'A bright modern two bedroom apartment situated on the first floor of this popular development on Highfield Street which runs parallel with Pall Mall close to its junction with Leeds Street. The property is close to Liverpool John Moores University and immediate vacant possession is available upon completion.',
    price: 60000,
    bedrooms: 2,
    bathrooms: 1,
    type: 'Terraced',
    newHome: '',
    recentlyAdded: 'Recently Added',
    },

    {
    image: 'https://media.rightmove.co.uk/75k/74061/127067960/74061_HSS248313_IMG_02_0000.jpeg',
    address: 'Finch Lea Drive, Liverpool, L14',
    description: 'A bright modern two bedroom apartment situated on the first floor of this popular development on Highfield Street which runs parallel with Pall Mall close to its junction with Leeds Street. The property is close to Liverpool John Moores University and immediate vacant possession is available upon completion.',
    price: 120000,
    bedrooms: 3,
    bathrooms: 1,
    type: 'Semi-Detached',
    newHome: 'New Home',
    recentlyAdded: '',
    },

    {   
    image: 'https://media.rightmove.co.uk/120k/119425/126063677/119425_SEF220610_IMG_00_0000.jpeg',
    address: 'Harris Drive, Liverpool, L20',
    description: 'A bright modern two bedroom apartment situated on the first floor of this popular development on Highfield Street which runs parallel with Pall Mall close to its junction with Leeds Street. The property is close to Liverpool John Moores University and immediate vacant possession is available upon completion.',
    price: 160000,
    bedrooms: 3,
    bathrooms: 1,
    type: 'Semi-Detached',
    newHome: '',
    recentlyAdded: 'Recently Added',
    },

    {
    image: 'https://media.rightmove.co.uk/204k/203528/127002389/203528_1433138-1_IMG_00_0000.jpeg',
    address: 'Carnarvon Road, Liverpool, L9',
    description: 'A bright modern two bedroom apartment situated on the first floor of this popular development on Highfield Street which runs parallel with Pall Mall close to its junction with Leeds Street. The property is close to Liverpool John Moores University and immediate vacant possession is available upon completion.',
    price: 89_950,
    bedrooms: 3,
    bathrooms: 1,
    type: 'Terraced',
    newHome: '',
    recentlyAdded: 'Recently Added',
    },

    {
    image: 'https://media.rightmove.co.uk/73k/72919/129159044/72919_18276_IMG_00_0000.jpeg',
    address: '41 Butterfield Street, Liverpool',
    description: 'A bright modern two bedroom apartment situated on the first floor of this popular development on Highfield Street which runs parallel with Pall Mall close to its junction with Leeds Street. The property is close to Liverpool John Moores University and immediate vacant possession is available upon completion.',
    price: 60000,
    bedrooms: 2,
    bathrooms: 1,
    type: 'Terraced',
    newHome: '',
    recentlyAdded: 'Recently Added',
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/235k/234635/130007372/234635_ElementTheQuarter-208950-Liverpool-EQU655_IMG_00_0000_max_476x317.jpeg',
    address: 'Fully Managed Liverpool Investment , Low Hill, Liverpool,L6 1AE',
    description: 'Luxury eco apartments available below market value in Liverpool city centre.EQU655',
    price: 208950,
    type: 'Flat',
    bedrooms: 2,
    bathrooms: 2,
    newHome: 'New Home',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/2k/1745/130009607/1745_PTN114415_IMG_05_0000_max_476x317.jpeg',
    address: 'New Chester Road, Rock Ferry, Birkenhead',
    description: 'ARE YOU LOOKING TO GROUND FLOOR LIVING? Then look no further than this cosy flat thats on offer on New Chester Road. Boasting 2 spacious bedrooms, a generous lounge and fitted kitchen this flat has everything you could ask for. With No Onward Chain this flat is not one to be missed. Call us now.',
    price: 85000,
    type: 'Ground Flat',
    bedrooms: 2,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/2k/1721/130009553/1721_ALT120648_IMG_00_0000_max_476x317.jpeg',
    address: 'Belmont Place, Liverpool',
    description: 'Jones and Chapman are pleased to offer for sale this mid terraced house located on Belmont Place L19.',
    price: 75000,
    type: 'Terraced',
    bedrooms: 2,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/18k/17592/129040487/17592_WID220346_IMG_00_0000_max_476x317.jpeg',
    address: 'Rushmore Drive, Widnes, Cheshire, WA8',
    description: 'EXECUTIVE FAMILY HOME ON RUSHMORE DRIVE!!. Reeds Rains are delighted to bring to the market this FOUR BEDROOM DETACHED FAMILY HOME on Rushmore Drive. This well presented property boasts a wealth of living space and is ideally located on a popular residential estate in the heart of Widnes with gre...',
    price: 390000,
    type: 'Detached',
    bedrooms: 4,
    bathrooms: 3,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/130k/129250/130008461/129250_101537006332_IMG_00_0000_max_476x317.jpeg',
    address: 'Seabank Road, Wallasey',
    description: 'What a delightful semi detached home this is! In a great location with a nice outlook of the River Mersey, boasting three bedrooms, additional loft room, a large driveway leading to a garage and sunny rear garden; it is just perfect for a growing family to spend many years sharing good times and ...',
    price: 280000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/119k/118675/130008410/118675_PRE220937_IMG_00_0000_max_476x317.jpeg',
    address: 'Allcot Avenue, Tranmere, Wirral',
    description: 'A credit to the current owners! This stunning family home is ready for immediate occupation. Offering four generous double bedrooms, tasteful decoration throughout and no onwards chain. Get in touch today to arrange your viewing before its to late!',
    price: 200000,
    type: 'Semi-Detached',
    bedrooms: 4,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/5k/4785/130007918/4785_ALL220479_IMG_00_0000_max_476x317.jpeg',
    address: 'Ullet Road, Liverpool, L8',
    description: '*TWO BEDROOMS* *UPPER FLOOR* *NO CHAIN* *CLOSE TO SEFTON PARK AND LARK LANE* *PARKING* Entwistle Green are delighted to offer for sale, this fantastic opportunity to purchase this two bedroom no chain apartment in Linnet House L8 Liverpool. Proven to be a very popular and in demand loc...',
    price: 110000,
    type: 'Flat',
    bedrooms: 2,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/207k/206270/130007873/206270_31736803_IMG_00_0000_max_476x317.jpeg',
    address: 'Tithebarn Road, Southport',
    description: "A stunning Victorian property bursting with character & period charm, it features high coved ceilings, original solid wood floorings & doors and a 'secret enchanted garden' too. Offering space in abundance including three DOUBLE bedrooms, this property really is a must see! NO CHAIN! Upo...",
    price: 250000,
    type: 'Terraced',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/13k/12162/130007816/12162_S158688_IMG_00_0000_max_476x317.jpeg',
    address: 'New Albert Terrace, Runcorn',
    description: '**THREE BEDROOMS. OFF ROAD PARKING. FREEHOLD TENURE.** A rare opportunity to purchase an extremely well cared for bay fronted terrace property with many original features and the unusual benefit of having off road parking to the front. Features include; full double glazing, a gas central heati...',
    price: 100000,
    type: 'Terraced',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/235k/234635/130007405/234635_ElementTheQuarter-96000-Liverpool-EQU700_IMG_05_0000_max_476x317.jpeg',
    address: 'Fully Managed Liverpool Investment , Low Hill, Liverpool,L6 1AE',
    description: 'Ground-breaking low-carbon Liverpool apartments 80m from Royal Liverpool University Hospital with 8% rental return. EQU700',
    price: 96000,
    type: 'Flat',
    bedrooms: 1,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/235k/234635/130007393/234635_ElementTheQuarter-194950-Liverpool-EQU683_IMG_03_0000_max_476x317.jpeg',
    address: 'Fully Managed Liverpool Investment , Low Hill, Liverpool,L6 1AE',
    description: 'Attention Investors! Do not miss this new launch in Liverpool with revolutionary buy to let apartments starting from just £92,950.EQU683',
    price: 194950,
    type: 'Flat',
    bedrooms: 1,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/235k/234635/130007378/234635_ElementTheQuarter-107950-Liverpool-EQU663_IMG_01_0000_max_476x317.jpeg',
    address: 'Fully Managed Liverpool Investment , Low Hill, Liverpool,L6 1AE',
    description: 'Incredible prices on luxury Liverpoolapartments located in the heart of the Knowledge Quarter. Buy to let investment only with 8% NETrental returns.EQU663',
    price: 107950,
    type: 'Flat',
    bedrooms: 1,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/80k/79755/120258050/79755_DaleStreetApartments-300000-Liverpool-DS7881_IMG_01_0000_max_476x317.jpeg',
    address: 'Dale Street Apartments, Dale Street',
    description: "Stunning apartments in one of Liverpool's oldest buildings start from just £121,950. DS7881",
    price: 300000,
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    newHome: 'New Home',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/82k/81206/127592324/81206_MTS220496_IMG_00_0000_max_476x317.jpeg',
    address: 'Pennystone Close, Saughall Massie, Wirral',
    description: 'Situated in a quiet residential area, this charming bungalow is well presented throughout. Further benefitting from off road parking and good size private rear garden. Currently being sold with no ongoing chain!',
    price: 160000,
    type: 'Bungalow',
    bedrooms: 2,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/210k/209477/130007192/209477_32005880_IMG_00_0000_max_476x317.jpeg',
    address: 'Fern Road, Whitby, Ellesmere Port',
    description: 'JUST TAKE A LOOK AT THIS PROPERTY BURSTING WITH POTENTIAL & OFFERING A LARGER THAN AVERAGE GARDEN! Tucked away on a popular road in the heart of Whitby, this is a superb family home in need of a scheme of modernisation. Surrounded by excellent amenities including a range of shops just a stones th...',
    price: 210000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/200k/199958/130007069/199958_50636_IMG_00_0000_max_476x317.jpeg',
    address: 'Claude Road, Anfield, Liverpool L6 0BT',
    description: 'BOOK ONLINE OR CALL 24/7 TO VIEW* Freehold* This 4 bedroom, 2 bathroom mid-terrace property is of a high standard throughout. A full refurbishment was carried out 2 years ago including a new kitchen, bathroom /WC & shower room/WC. With valid Gas Safety report, EICR and EPC rating D. An id...',
    price: 150000,
    type: 'Terraced',
    bedrooms: 3,
    bathrooms: 3,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/18k/17592/130006796/17592_WID220451_IMG_00_0000_max_476x317.jpeg',
    address: 'Cronton Lane, Widnes, Cheshire, WA8',
    description: 'WELL PRESENTED & MODERN APARTMENT!!. Attention first time buyers and investors alike!. Reeds Rains are delighted to bring to the market this very well presented TWO BEDROOM APARTMENT ideally located on the highly sought after College Fields on Cronton Lane. The apartment is well situated clos...',
    price: 115000,
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/137k/136718/130006493/136718_1475_IMG_04_0000_max_476x317.jpeg',
    address: 'South Sudley Road, Aigburth, L19',
    description: '** Spacious Family Home ** Open Plan Kitchen/Diner ** Driveway For Off Road Parking ** Ground Floor WC ** Well Maintained Front & Rear Gardens ** Popular Local Schools ** Full Of Character & Charm ** Two Reception Rooms ** Excellent Local Amenities ** Sought After Location **',
    price: 410000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/8k/7449/130006286/7449_WDE220613_IMG_00_0000_max_476x317.jpeg',
    address: 'Ennismore Road, Old Swan, Liverpool, Merseyside, L13',
    description: 'For sale by Modern Method of Auction; Starting Bid Price £90,000 plus Reservation Fee. CALLING ALL INVESTORS...CASH PURCHASE ONLY... This property was orginally built as a 3 bedroom mid terrace with space for 2 reception rooms and a kitchen on the ground floor. ',
    price: 90000,
    type: 'Terraced',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/84k/83702/130006148/83702_32005776_IMG_00_0000_max_476x317.jpeg',
    address: 'Owen Street, St. Helens, WA10 3',
    description: 'We are delighted to have the opportunity to bring to market this beautiful two bedroom end terraced property, located in a much sought-after area and rarely available position on Owen Street. The property benefits from gas central heating, UPVC double glazing, and briefly comprises; Styl...',
    price: 110000,
    type: 'End of Terrace',
    bedrooms: 2,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/84k/83702/130005746/83702_32005754_IMG_00_0000_max_476x317.jpeg',
    address: 'Tatton Way, Eccleston, St. Helens',
    description: 'We are delighted to have the opportunity to bring to market this wonderful three bedroom semi detached property in a much sought-after area and rarely available position on Tatton Way Eccleston. The property briefly comprises; Entrance hallway, ground floor cloakroom large reception ro...',
    price: 230000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/75k/74061/129025514/74061_HSS259886_IMG_01_0000_max_476x317.jpeg',
    address: 'Hopwood Street, Liverpool, L5',
    description: '... No Onward Chain... Spacious end terrace situated on Hopwood Street with excellent transport links for commuting with the A56 just minutes away, walking distance to an array of local amenities, and has access to locally rated schools. Inside the property, the accommodation briefly comp...',
    price: 130000,
    type: 'End of Terrace',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/2k/1721/126164891/1721_ALT120276_IMG_08_0000_max_476x317.jpeg',
    address: 'Mill Lane, Wavertree, Liverpool',
    description: 'Jones and Chapman are delighted to offer for sale this spacious and well presented semi detached situated on Mill Lane. This area is popular, with excellent local schools, nearby motorway access and a wealth of nearby shops and eateries in Edge Lane Retail Park.',
    price: 200000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/69k/68046/113143172/68046_KingsDockMill-250000-Liverpool-KDM8850_IMG_01_0000_max_476x317.jpeg',
    address: 'L1 Investment Apartments, Hurst Street, Liverpool,L1 8DN',
    description: '7% NET rental return on 2-bedroom apartments in Liverpool city centre. The expert management company ensures your investment is hassle-free, with apartment prices startingfrom £169,995. KDM8850',
    price: 250000,
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    newHome: 'New Home',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/13k/12162/128947442/12162_S149650_IMG_00_0000_max_476x317.jpeg',
    address: 'Lockfield, Runcorn',
    description: '**IDEAL FIRST TIME BUY. TWO PARKING SPACES. CONVENIENTLY PLACED FOR LOCAL AMENITIES AND COMMUTER LINKS.**Adams Estate Agents offer to market for sale this well presented mid town house which benefits from gas central heating and UPVC double glazing throughout. Situated on a favouable plot...',
    price: 130000,
    type: 'Town House',
    bedrooms: 3,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },

    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/22k/21485/129297218/21485_WDB220582_IMG_00_0000_max_476x317.jpeg',
    address: 'Inner Forum, Liverpool, L11',
    description: 'Sutton Kersh are pleased to offer this spacious end of terraced house with no chain involved. The accommodation comprise: Porch, hall, lounge, sitting room/dining room, kitchen and rear porch/utility area. To the first floor landing there are three bedrooms and bathroom with separate WC. Outsi...',
    price: 130000,
    type: 'End of Terrace',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/44k/43961/130003235/43961_32005622_IMG_00_0000_max_476x317.jpeg',
    address: 'Hilary Avenue, Liverpool',
    description: 'We are pleased to announce for sale this three bedroom semi detached property which would make an ideal family home. The property benefits from double glazing and gas central heating and briefly comprises of: entrance hallway, lounge, dining room, and extended kitchen to the ground floor. To the...',
    price: 185000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/75k/74660/129126002/74660_396359_IMG_00_0000_max_476x317.jpeg',
    address: 'Nutgrove Road, St. Helens, Merseyside, WA9 5JL',
    description: 'We are delighted to be able to offer this opportunity to buy this tenanted 2-bedroom terraced house which was fully refurbished in 2019. This tenanted property offers spacious well-appointed living accommodation. Being deceptively spacious, the property boasts off road parking to the front of ...',
    price: 70000,
    type: 'Terraced',
    bedrooms: 2,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/99k/98051/130002101/98051_11796576_IMG_00_0000_max_476x317.jpeg',
    address: 'Reed Avenue West, Leasowe, Wirral',
    description: 'Move Residential are delighted to showcase this well maintained three bedroom semi detached property. Appointed with a fresh and neutral décor this impressive home must be viewed to be appreciated in full. In brief you have a hallway, bay fronted lounge with opening to a dining room with f...',
    price: 200000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/245k/244991/130001738/244991_BEB220751_IMG_00_0000_max_476x317.jpeg',
    address: 'Fairacres Road, Bebington, Wirral',
    description: "Situated on one of Bebington's most desirable roads, this expansive family home is not to be missed. Offering four generous double bedrooms, tons of living space throughout and a delightful rear garden. Get in touch today to arrange your viewing before its to late!",
    price: 425000,
    type: 'Semi-Detached',
    bedrooms: 4,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/93k/92851/127696832/92851_LCC220103_IMG_00_0000_max_476x317.jpeg',
    address: 'Duke Street, Liverpool, L1',
    description: 'Public Notice - Apartment 88, 136 Duke Street, Liverpool, L1 5BB. We are acting in the sale of the above property and have received an offer of £190,000. Any interested parties must submit any higher offers in writing to the selling agent before an exchange of contracts takes place. EP...',
    price: 190000,
    type: 'Flat',
    bedrooms: 2,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/143k/142901/130000967/142901_S158495_IMG_00_0000_max_476x317.jpeg',
    address: 'Liverpool Road, Prescot, L34 1LP',
    description: 'Offered with No Onward Chain.  A beautifully presented three bedroom semi detached property situated in a much sought after location and within close proximity of Prescot town centre, public transport routes, excellent local schools, shops and with easy access to motorway links.  The...',
    price: 235000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/203k/202847/129957404/202847_Station39_IMG_28_0000_max_476x317.jpeg',
    address: 'Station Road, Wallasey, Merseyside, CH44',
    description: '* 2 bedroomed semi-detached with front and rear gardens * Conservatory * Utility room * Carport * 3 car driveway * Chain-free *',
    price: 179950,
    type: 'Semi-Detached',
    bedrooms: 2,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/200k/199958/130000385/199958_50580_IMG_00_0000_max_476x317.jpeg',
    address: 'Grosvenor Road, Liverpool L15 0EZ',
    description: 'Offered with NO CHAIN, this two-bed terraced property in a popular Liverpool location is perfect for those looking to get on the property ladder or to invest.......',
    price: 125000,
    type: 'Terraced',
    bedrooms: 2,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/13k/12200/85054344/12200_ART210417_IMG_00_0000_max_476x317.jpeg',
    address: 'Gateacre Park Drive, Gateacre, Liverpool, L25',
    description: 'Sutton Kersh are delighted to offer for sale this semi-detached bungalow. The property itself briefly comprises a reception hall, a welcoming reception room, a fitted kitchen, two bedrooms and a family bathroom. The master bedroom is well-sized and boasts a large amount of storage with fitted ...',
    price: 240000,
    type: 'Bungalow',
    bedrooms: 2,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/75k/74061/129999425/74061_HSS263178_IMG_00_0000_max_476x317.jpeg',
    address: 'Lapwing Close, Liverpool, L12',
    description: 'Set in the sought-after location of West Derby, in a quiet close, is this beautifully presented four-bedroom detached property, an ideal home for growing families.',
    price: 375000,
    type: 'Detached',
    bedrooms: 4,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/19k/18732/128991320/18732_HWS220433_IMG_00_0000_max_476x317.jpeg',
    address: 'Thingwall Road East, Thingwall, Wirral',
    description: 'No Chain! A truly superb and beautifully designed detached bungalow. Set back from the main road and found in the sought after location of Thingwall, offering three bedrooms, newly refurbished interior and an in/out driveway, it is not one to be missed!',
    price: 375000,
    type: 'Bungalow',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/55k/54199/129998735/54199_GBS220842_IMG_00_0000_max_476x317.jpeg',
    address: 'Home Farm Road, Woodchurch, Wirral',
    description: 'An excellent opportunity for a first-time buyer or buy to let investor! Being sold with no onward chain and in need of some refurbishment, this three bedroom house is well located for shops, schools and transport links!',
    price: 145000,
    type: 'Terraced',
    bedrooms: 3,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/250k/249749/129998126/249749_25659310_IMG_00_0000_max_476x317.jpeg',
    address: 'Rosedale Road, Birkenhead, CH42',
    description: 'No Chain! Fantastic opportunity for either a first time buyer or investor to purchase this tidy three bedroom mid terrace home on the popular Rosedale Road in Tranmere. Situated between Victoria and Mersey Park, the property has nearby access to local amenities, schools and Rock Ferry Train St...',
    price: 109750,
    type: 'Terraced',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/245k/244928/129998060/244928_202212061556sq_zmch_IMG_00_0000_max_476x317.jpeg',
    address: '55 Beaconsfield Road, Wirral, Cheshire CH62 1AE',
    description: 'FOR SALE VIA OUR LIVESTREAM AUCTION ON THE 14TH FEBRUARY. PLEASE REGISTER TO BID VIA THE AUCTION HOUSE CHESHIRE WEBSITE!',
    price: 77000,
    type: 'End of Terrace',
    bedrooms: 2,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/21k/20231/129997688/20231_NTH_JST_LFSYCL_375_530202192_IMG_00_0000_max_476x317.jpeg',
    address: 'Lord Street, Southport, Merseyside, PR9',
    description: 'This sixth-floor apartment situated in the heart of and overlooking Southport Lord Street. The property has two balcony’s and boasts views to the front and rear. The condition is really good as the property has just been painted and decorated throughout.',
    price: 165000,
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/236k/235937/129997328/235937_RS0014.11_IMG_00_0000_max_476x317.jpeg',
    address: 'Old Hall Street',
    description: 'BRAND NEW exciting investment opportunity that has just landed in Liverpool. I think it could be perfect for you!',
    price: 148950,
    type: 'Apartment',
    bedrooms: 1,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/236k/235937/129997331/235937_RS0014.12_IMG_00_0000_max_476x317.jpeg',
    address: 'Old Hall Street',
    description: 'BRAND NEW exciting investment opportunity that has just landed in Liverpool. I think it could be perfect for you!',
    price: 160950,
    type: 'Apartment',
    bedrooms: 1,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/255k/254246/129996788/254246_32005420_IMG_00_0000_max_476x317.jpeg',
    address: 'Princes Parade, Liverpool',
    description: 'An excellent modern development for tenants looking for premium city centre living, These new apartments will be perfect for investors looking to invest in a waterside apartment! To receive more information, please contact us directly. Comprising of modern fixtures and fittings,...',
    price: 129995,
    type: 'Apartment',
    bedrooms: 1,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/255k/254246/129996782/254246_32005419_IMG_00_0000_max_476x317.jpeg',
    address: 'Waterloo Road, Liverpool',
    description: 'An excellent modern development for tenants looking for premium city centre living, These new apartments will be perfect for investors looking to invest in a waterside apartment! To receive more information, please contact us directly. Comprising of modern fixtures and fittings,...',
    price: 125000,
    type: 'Apartment',
    bedrooms: 1,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/255k/254246/129701852/254246_31987087_IMG_00_0000_max_476x317.jpeg',
    address: 'William Jessop Way, Liverpool',
    description: '**INVESTORS ONLY** A brand new development coming soon! Offering modern living in Liverpool comprises a luxury specification throughout. This makes the perfect investment property due to the high yield and capital growth potential. Please contact us for further information.',
    price: 123950,
    type: 'Apartment',
    bedrooms: 1,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/255k/254246/129693608/254246_31986625_IMG_00_0000_max_476x317.jpeg',
    address: 'Cuerden Street, Liverpool',
    description: 'An excellent modern development for tenants looking for premium city centre living, These new apartments will be perfect for investors, young professionals and mature students. To receive more information, please contact us directly. Comprising of modern fixtures and fittings, e...',
    price: 119000,
    type: 'House',
    bedrooms: 1,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/255k/254246/129533474/254246_31975346_IMG_00_0000_max_476x317.jpeg',
    address: 'Stanley Street, Liverpool',
    description: 'Comprising of modern fixtures and fittings, this 2 bed apartment is located on the 2nd floor with elevator access. Currently tenanted for £995.00 PCM, generating a 6.5% Gross Yield. To receive more information, please contact us directly.',
    price: 150000,
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/57k/56047/129874403/56047_31998684_IMG_00_0000_max_476x317.jpeg',
    address: 'Brancote Road, Claughton',
    description: `This is a particularly roomy "Must See" apartment. It has to be classed as a 'one double bedroomed apartment' but you'll see that amidst the accommodation, is an internal space the size of a second double bedroom or dining room. Unfortunately, we cannot class as either due to the lack of a window...`,
    price: 150000,
    type: 'Apartment',
    bedrooms: 1,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/75k/74061/128308847/74061_HSS256884_IMG_00_0000_max_476x317.jpeg',
    address: 'Devon Street, St. Helens, WA10',
    description: 'CASH BUYERS AND INVESTORS ONLY This is a mid-terrace property in need of modernising but has lots of potential. Located in a popular area this mid-terrace has a spacious living room, an extended kitchen area, and a downstairs bathroom with a large rear courtyard. Upstairs are two double bedroo...',
    price: 80000,
    type: 'Terraced',
    bedrooms: 2,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/80k/79009/129954233/79009_25557680_IMG_00_0000_max_476x317.jpeg',
    address: 'Birchfield Street, Thatto Heath, St Helens, WA9',
    description: 'Offered with no onward chain is this three bedroom semi-detached property located in a popular area of St. Helens. This property is perfect for buy to let investment. In brief, the property comprises of entrance hallway, large living room and a well sized kitchen/diner. To the first floor, you...',
    price: 145000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/204k/203528/128979929/203528_1442252-1_IMG_00_0000_max_476x317.jpeg',
    address: 'Dartmouth Drive, Bootle, L30',
    description: 'Set in a fantastic position this delightful four bedroom home provides excellent living space with quality fitments and tasteful décor throughout. Perfect for first time buyers or for those looking for a starter home for their young family, this delightful property has a great deal to offer. E...',
    price: 150000,
    type: 'End of Terrace',
    bedrooms: 4,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/75k/74061/126053435/74061_HSS244905_IMG_00_0000_max_476x317.jpeg',
    address: 'Portman Road, Liverpool, L15',
    description: "Warm and inviting from the second you walk into this home, with plenty of space for a young growing family! This traditional 3 bedroom terrace property really does ooze 'cosy family home', with a spacious living room with a large bay window allowing light to flood in, down th...",
    price: 170000,
    type: 'Terraced',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/19k/18086/129992561/18086_CBY220495_IMG_00_0000_max_476x317.jpeg',
    address: 'Blundellsands Classic, 19 Blundellsands Road West, Liverpool, L23',
    description: 'The Blundellsands Classic is a highly sought after development and offers luxury retirement living. The development offers a range of facilities including an on site restaurant, guest suites and laundry room to name a few. This is a truly unique offering and ideal for anyone looking ...',
    price: 310000,
    type: 'Bungalow',
    bedrooms: 2,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/11k/10602/129992519/10602_11804089_IMG_00_0000_max_476x317.jpeg',
    address: 'Snowberry Close, Widnes, WA8',
    description: ' New way homes are delighted to offer to the market this very well looked after three bedroom detached family home positioned on a fantastic sized plot with beautiful gardens to the front, side and rear. The property is warmed by gas central heating, fully double glazed and upon internal insp...',
    price: 265000,
    type: 'Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/55k/54487/129992441/54487_DOR1001898_IMG_00_0000_max_476x317.jpeg',
    address: 'St Kevins Drive, Kirkby',
    description: '***CHAIN FREE** SEMI DETACHED**EN-SUITE**OFF ROAD PARKING*** Doran Kennedy Sales are delighted to bring this beautifully presented 3 bedroom chain free property to the sales market, situated on the newly developed Mulberry park estate, Within walking distance to the new rail station and (cont.)',
    price: 197000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/204k/203528/128660711/203528_1450611-1_IMG_21_0000_max_476x317.jpeg',
    address: 'Merton Drive, Liverpool, L36',
    description: 'Set in a fantastic position this delightful three bedroom semi detached with garage provides excellent living space with quality fitments and tasteful décor throughout. Entering the property reveals fantastic accommodation which briefly comprises entrance hallway, a lovely large lounge diner wh...',
    price: 193000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/200k/199958/129992075/199958_50613_IMG_00_0000_max_476x317.jpeg',
    address: 'Berwick Avenue, Ainsdale PR8 3LJ',
    description: 'FIRST TIME BUYERS! - Located a stone throw from Ainsdale Village, shops, major transport links and schools. 3 bed semi detached home, in need of modernisation but has plenty of scope for a family looking to upsize or jump onto the property ladder with a large garden plus driveway potential.',
    price: 150000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 3,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/69k/68046/129991874/68046_TheBridewell-73000-Liverpool-BR8056_IMG_02_0000_max_476x317.jpeg',
    address: 'L2 Apartments, Cheapside, Liverpool, L2 2HT',
    description: 'Completed and 100% tenanted en suite student investments for sale in Liverpool city centre from £69,995with 7% rental returns for 2 years. Invest in luxury student apartments with high rental income and capital growth. BR8056',
    price: 73000,
    type: 'Flat',
    bedrooms: 1,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/69k/68046/129991904/68046_TheMill-144950-Liverpool-MILL149_IMG_00_0000_max_476x317.jpeg',
    address: 'L1 Hands Off Investments, Liverpool',
    description: 'Enquire today for our FREE info pack, as the development projects unmatched6% rental returns, and annual rental income starting from £8,397! MILL149',
    price: 144950,
    type: 'Studio',
    bedrooms: 1,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/69k/68046/129991907/68046_TheMill-169950-Liverpool-MILL99_IMG_05_0000_max_476x317.jpeg',
    address: 'L1 Hands Off Investments, Liverpool',
    description: 'Maximum growth opportunity! Grade II listed mill investments from £139,950. MILL99',
    price: 169950,
    type: 'Apartment',
    bedrooms: 1,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/69k/68046/129991538/68046_MillersPlace-169950-Liverpool-HM194_IMG_05_0000_max_476x317.jpeg',
    address: 'L1 Off Plan Apartments, Liverpool',
    description: 'Enquire today for our FREE info pack, as the development projects unmatched 7% rental returns, and annual rental income starting from £8,747! HM194',
    price: 169950,
    type: 'Apartment',
    bedrooms: 1,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/69k/68046/129991457/68046_KingsDockMill-224995-Liverpool-KDM3525_IMG_01_0000_max_476x317.jpeg',
    address: 'L1 Investment Apartments, Hurst Street, Liverpool,L1 8DN',
    description: "Receive 7% rental return in this new development in collaboration with one of Liverpool's most innovative and experienced developers. KDM3525",
    price: 224995,
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/69k/68046/129991406/68046_CompletedLiverpoolApartment-112995-Liverpool-FP3155_IMG_00_0000_max_476x317.jpeg',
    address: 'Completed Liverpool Apartment, Falkner Street',
    description: 'Hands-off investment opportunity: A local established management company overseeing properties with high 7% rental yields. FP3155',
    price: 112995,
    type: 'Apartment',
    bedrooms: 1,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/46k/45477/129991685/45477_76ramford_IMG_04_0000_max_476x317.jpeg',
    address: 'Ramford Street, St. Helens, Merseyside, WA9',
    description: 'Situated in an established residential location is this semi detached family property with three bedrooms in need of some improvements but offering an ideal first home with gardens to the front and rear and available with no onward chain',
    price: 95000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/219k/218180/129397367/218180_WYS221287_IMG_00_0000_max_476x317.jpeg',
    address: 'Seafield Drive, Wallasey, Wirral',
    description: 'A much-loved family home that has served its current owners incredibly well! Offering six bedrooms and four reception rooms, this substantial property is ready to be updated and has gardens to the front and rear! Virtual tour available.',
    price: 300000,
    type: 'Semi-Detached',
    bedrooms: 6,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/75k/74061/128270216/74061_HSS253955_IMG_00_0000_max_476x317.jpeg',
    address: 'Brierley Close, Bootle, L30',
    description: 'We are delighted to present this Three Bedroom Semi Detached House located in the desirable town of Bootle on the outskirts of Liverpool. The property offers an ideal family home with ample living space. The property comprises: Three bedrooms, family bathroom with&nb...',
    price: 175000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/87k/86092/129989369/86092_11803985_IMG_00_0000_max_476x317.jpeg',
    address: 'Hereford Road, Liverpool',
    description: "James Kristian are delighted to offer to the market for sale this two bedroom, first floor apartment situated in the popular location of Seaforth, L21. Hereford Road is located nearby to attractive transport links, shops and a short walk to Waterloo and Crosby's amenities. In brief, the prope...",
    price: 60000,
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/226k/225545/129988823/225545_PRA11180_IMG_00_0000_max_476x317.jpeg',
    address: 'Kensington Road, Southport, Merseyside. PR9 0RZ',
    description: 'A fantastic three bedroom detached house, ideal for first time buyers or property investors. Located in the heart of Southport, just a short walk from Southport train station and the iconic Lord Street.',
    price: 155000,
    type: 'Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/77k/76789/124205738/76789_7644_LESH_IMG_00_0000_max_476x317.jpeg',
    address: 'Mulberry Road, Rock Ferry',
    description: 'Grab your Mulberry bag...you`ve pulled! This attractive property offers deceptively spacious accommodation that is ready to move into. The layout briefly comprises porch, hallway, lounge, dining room, kitchen dining room, three double bedrooms, bathroom, loft room, cellars and generous rear garden.',
    price: 125000,
    type: 'End of Terrace',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/8k/7449/125269676/7449_HTN210197_IMG_00_0000_max_476x317.jpeg',
    address: 'Sergeant Road, Liverpool, L12',
    description: 'STAND TO ATTENTION! SERGEANT! Whitegates are happy to present this stunning 3 bedroom property, situated just a stone throw away from the heart of West Derby, A lovely semi-detached family house offering great floor space and three bedrooms. The ground floor ope...',
    price: 175000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/9k/8510/123843881/8510_SKE220190_IMG_00_0000_max_476x317.jpeg',
    address: 'Turnberry, Skelmersdale, Lancashire, WN8',
    description: 'Fantastic chance to buy a larger than average semi detached home on this sought after residential development. Offering great space for families, this is a must see home. Comprising through lounge/ dining room, kitchen, study/utility room to the ground floor and three bedrooms and family bathroom...',
    price: 179995,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 3,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/24k/23444/125044424/23444_31651363_IMG_08_0000_max_476x317.jpeg',
    address: 'Ashcroft Avenue, Ormskirk',
    description: 'Located within easy reach of local amenities this two bedroom semi detached TRUE bungalow has benefit of no onward chain delay. Requiring some updating the gas centrally heated double glazed property briefly comprises: Entrance hall, lounge, kitchen, two bedrooms and shower room. Low maintenance ...',
    price: 179950,
    type: 'Semi-Detached Bungalow',
    bedrooms: 2,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/239k/238523/129973934/238523_85LIVERPOOLROADSOUTH_IMG_01_0000_max_476x317.jpeg',
    address: 'Liverpool Road South, Burscough, L40',
    description: 'Churcher Estates are proud to present this five bedroom extended semi detached property located in the heart of the desirable Burscough village. Local amenities just minutes away including supermarkets, shops and restaurants, with fantastic transport links and great schools. Available with NO CHAIN',
    price: 350000,
    type: 'Semi-Detached',
    bedrooms: 5,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/203k/202832/126497693/202832_1418301-1_IMG_00_0000_max_476x317.jpeg',
    address: 'Deerfield Close, St. Helens, WA9',
    description: '***IDEAL FIRST TIME BUYER HOME*** Purplebricks are delighted to welcome to the market this deceptively spacious three bedroom semi detached set on a quiet cul de sac location. The accommodation briefly comprises an entrance hall, ground floor wc, lounge and dining kitchen completes the ground flo...',
    price: 195000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/69k/68046/129888731/68046_OneParkLane-144960-Liverpool-OPL869_IMG_00_0000_max_476x317.jpeg',
    address: 'Park Lane Apartments, Liverpool',
    description: 'The unrivalled6%projected rental return allows you to start earning an annual rental income from £7,797. Enquire today to receive our inciteful info pack! OPL869',
    price: 144960,
    type: 'Studio',
    bedrooms: 1,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/55k/54487/129987194/54487_DOR1001899_IMG_00_0000_max_476x317.jpeg',
    address: 'Mount Crescent, Kirkby',
    description: '** BRAND NEW DOUBLE GLAZING ** BRAND NEW CENTRAL HEATING ** REWIRED ** THREE BEDROOM DETACHED PROPERTY ** OFF ROAD PARKING ** GARAGE ** NO CHAIN ** PRIVATE ESTATE ** Doran Kennedy are delighted to bring to the sales market this beautifully presented three bedroom detached property sit (cont.)',
    price: 220000,
    type: 'Detached',
    bedrooms: 3,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/54k/53811/129986933/53811_704693_IMG_00_0000_max_476x317.jpeg',
    address: 'Shadowbrook Drive, Liverpool, Merseyside',
    description: 'A rare and promising find for any house hunter, this spacious detached property has been thoroughly renovated throughout, meaning it is ready for its new owner to simply move in. With superb workmanship clearly apparent throughout, the property features three good-sized bedrooms, one of which bo...',
    price: 230000,
    type: 'Detached',
    bedrooms: 3,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/119k/118675/128945252/118675_PRE221056_IMG_00_0000_max_476x317.jpeg',
    address: 'Wendover Close, Prenton, Wirral',
    description: "Tucked away in one of Prenton's quiet cul-de-sacs is this deceptively spacious family home. Offering three generous double bedrooms, a pristine family bathroom and tasteful decoration throughout. An internal viewing is advised to appreciate this property fully!",
    price: 210000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/31k/30399/129421694/30399_ALL220457_IMG_00_0000_max_476x317.jpeg',
    address: 'Cherrydale Road, Mossley Hill, Merseyside, L18',
    description: 'Welcome to this gorgeous three bedroom semi detached home located within the highly desirable area of Mossley Hill.',
    price: 360000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/75k/74061/125069180/74061_HSS218435_IMG_00_0000_max_476x317.jpeg',
    address: 'Dignum Mead, Liverpool, L27',
    description: 'A spacious 3 bedroom terraced property in the popular residential area of Dignum Mead L27, With no onward chain, Perfect for first-time buyers and families and situated close to all local amenities, shops, schools, and all major transport links. The property benefits from gas central h...',
    price: 115000,
    type: 'Terraced',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/39k/38037/129984995/38037_CAM2004728_IMG_00_0000_max_476x317.jpeg',
    address: 'Huyton Lane, Huyton, Liverpool',
    description: 'Cameron Mackenzie are pleased to offer for sale this semi-detached property situated in a popular location in Huyton with all the amenities of Huyton Village nearby. The accommodation briefly comprises of entrance porch, hall, two reception rooms, dining kitchen, three bedrooms and four pie (cont.)',
    price: 250000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/219k/218180/127278191/218180_WYS221216_IMG_00_0000_max_476x317.jpeg',
    address: 'Rowson Mews, Rowson Street, Wallasey',
    description: 'Beautifully presented with no onward chain! Offered for sale with an excellent tenant in situ or with the option for vacant possession is this one bedroom first floor apartment. Conveniently situated just walking distance to transport links, Vale Park and the Promenade.',
    price: 90000,
    type: 'Flat',
    bedrooms: 1,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/23k/22445/129984923/22445_WKY220115_IMG_00_0000_max_476x317.jpeg',
    address: 'Evans Road, Wirral, Merseyside, CH47',
    description: 'Situated in this ideal location close to local shops and eateries is this two bedroom extended terraced property being offered for sale with no onward chain.',
    price: 195000,
    type: 'Terraced',
    bedrooms: 2,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/21k/20237/128620295/20237_S146794_IMG_00_0000_max_476x317.jpeg',
    address: 'Aughton Road, Southport, PR8 2AF',
    description: 'A fabulous FIVE BEDROOM FAMILY HOME or potential INVESTMENT OPPORTUNITY to convert into a number of flats. (subject to the usual consents being obtained)\n',
    price: 325000,
    type: 'Link Detached House',
    bedrooms: 5,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/24k/23444/129984413/23444_32004676_IMG_00_0000_max_476x317.jpeg',
    address: 'Milman Close, Ormskirk',
    description: 'A 4 Bedroom Detached family home with No Further Chain Delay which is located in a sought after cul-de-Sac location just off tree lined Prescot Road, Aughton. The property is situated in Milman Close just off Prescot Road, Aughton, within walking distance to Ormskirk toen centre, with al...',
    price: 335000,
    type: 'Detached',
    bedrooms: 4,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/219k/218180/129984263/218180_WYS221347_IMG_00_0000_max_476x317.jpeg',
    address: 'Harrowby Road, Wallasey, Wirral',
    description: 'For Sale with No Onward Chain! This super little semi-detached home features two bedrooms and benefits from stunning views of the Liverpool skyline and River Mersey from its doorstep! The perfect first-time buy or buy-to let investment.',
    price: 100000,
    type: 'Semi-Detached',
    bedrooms: 2,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/55k/54199/129984119/54199_GBS221041_IMG_00_0000_max_476x317.jpeg',
    address: 'Kirkway, Greasby, Wirral',
    description: 'Tremendous scope to enhance! A rare and exciting opportunity exists to purchase this much loved three bedroom traditional home in need of cosmetic improvement. Boasting dining room, extended rear family room with woodblock flooring, off road parking, lovely gardens & offered for sale with NO...',
    price: 235000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/99k/98051/129983777/98051_11793058_IMG_00_0000_max_476x317.jpeg',
    address: 'Stanley Road, New Ferry, Wirral',
    description: 'Immaculately presented and deceptively spacious three bedroom detached property is offered to the sales market by Move Residential. A credit to the current owners this home has been lovingly maintained and updated throughout offering modern living accommodation flooded with natural light and with...',
    price: 289950,
    type: 'Detached',
    bedrooms: 3,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/78k/77687/129983519/77687_AUC220812_IMG_00_0000_max_476x317.jpeg',
    address: 'Raleigh Road, Wirral, Merseyside, CH46',
    description: 'For Sale by Online Auction 11th January 2023 Lot 17 WHY BUY? 3 Bedrooms Immediate Rental Income of £6,600 Potential to Increase Rental income Scope for Capital Increase Strong 1st Time Buyer Property Tenure Freehold, Council Tax Band B',
    price: 90000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/78k/77687/129983516/77687_AUC220811_IMG_00_0000_max_476x317.jpeg',
    address: 'Back Westminster Road, Liverpool, Merseyside, L4',
    description: 'For Sale by Online Auction 11th January 2023 Lot 16 WHY BUY? Vacant Possession Detached Bungalow 2 Bedrooms Potential to Increase Rent Tenure Freehold, Council Tax Band A',
    price: 50000,
    type: 'Bungalow',
    bedrooms: 2,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/14k/13214/129982664/13214_WAT220463_IMG_00_0000_max_476x317.jpeg',
    address: 'Dingley Avenue, Orrell Park, Merseyside, L9',
    description: "NO CHAIN Such a stunning property, beautifully presented throughout, this turn key property really is one that can't be missed. Nestled within the heart of Orrell Park, this THREE SPACIOUS BEDROOM home offers all amenities on the doorstep. Viewing highly recommended. The ...",
    price: 135000,
    type: 'Terraced',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/204k/203162/129025256/203162_1459741-1_IMG_00_0000_max_476x317.jpeg',
    address: 'Eastview Close, Prenton, CH43',
    description: 'Tucked away at the end of a quiet Cul-de-Sac is this spacious four-bedroom end-of-terrace property situated on a spacious corner plot with front & rear gardens! Being sold with no ongoing chain, an early viewing is highly recommended! To the front of the property is an enclosed entrance porch w...',
    price: 145000,
    type: 'End of Terrace',
    bedrooms: 4,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/4k/3341/129982088/3341_32004496_IMG_00_0000_max_476x317.jpeg',
    address: 'Hazeldene Avenue, Wallasey',
    description: 'A well presented end of terrace property situated on a substantial corner plot and comprising of three bedrooms, two reception rooms, kitchen, bathroom and good sized rear yard with additional side garden. The property is situated close to local shops and transport links and also benefits from ga...',
    price: 160000,
    type: 'Not Specified',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/80k/79009/129981992/79009_25578673_IMG_00_0000_max_476x317.jpeg',
    address: 'Archer Grove, St Helens, WA9',
    description: 'New to the market is this three bedroom Semi Detached house. Ideal for a first time buyer, the property is located to close by transport links, schools and amenities. The property is available with no onward chain.The accommodation comprises: entrance hall with stairs leading to ...',
    price: 135000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/235k/234527/129981923/234527_f27e090e-43b7-49cf-b886-3157f58ccd69_IMG_00_0000_max_476x317.jpeg',
    address: 'Chester Road, Southport, PR9',
    description: 'Ideally located, beautifully presented three bedroom semi detached home with generous garden space and off road parking.',
    price: 260000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/49k/48375/125184500/48375_11604761_IMG_00_0000_max_476x317.jpeg',
    address: 'Errol Street, Liverpool, L17',
    description: 'GetAnOffer are offering this ATTRACTIVELY PRICED PROPERTY from a MOTIVATED seller to buyers that are in a position to purchase relatively quickly. This property has been PRICED to ENCOURAGE a QUICK SALE. GetAnOffer are pleased to offer this property for sale: Mid Terrace House Three Bedroo...',
    price: 210000,
    type: 'Terraced',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/13k/12161/129981539/12161_S158405_IMG_00_0000_max_476x317.jpeg',
    address: 'Upton Grange, Widnes',
    description: "Adams Estate Agents are delighted to offer this one owner since new four bedroom detached residence, occupying an excellent position of Redrow's sought after Upton Grange development. The property is sure to interest the family market as it offers superbly presented accommodation...",
    price: 360000,
    type: 'Detached',
    bedrooms: 4,
    bathrooms: 3,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/43k/42623/129981464/42623_SPT220845_IMG_00_0000_max_476x317.jpeg',
    address: 'Promenade, Southport, Merseyside, PR9',
    description: 'Are you looking for a fantastic buy to let investment opportunity? Then look no further. The current vendor hosts this two bedroom, two bathroom third floor apartment with Airbnb. At nearly full occupancy the flat can earn between £1200 - £3000 per calendar month. This is a fantastic ...',
    price: 110000,
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/19k/18392/85969545/18392_LTS220696_IMG_00_0000_max_476x317.jpeg',
    address: 'Kingham Close, Wirral, CH46',
    description: 'A modern three bedroom terraced home being sold with no onward chain. Nestled at the end of a small close boasting its own large off road parking with a good sized rear gardens. Please note not all pictures are available until the property has all been fully cleared. Let&r...',
    price: 130000,
    type: 'Terraced',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/22k/21485/129137678/21485_WDB220646_IMG_00_0000_max_476x317.jpeg',
    address: 'Kentwell Grove, West Derby, Liverpool, Merseyside, L12',
    description: 'Situated on a sought after cul de sac in West Derby, Sutton Kersh are proud to offer for sale this four bedroom detached family home occupying a large corner plot. The property has been well maintained by its current owners and is truly a rare opportunity. In brief, the property internally compri...',
    price: 350000,
    type: 'Detached',
    bedrooms: 4,
    bathrooms: 3,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/151k/150353/129971915/150353_HTN220567_IMG_00_0000_max_476x317.jpeg',
    address: 'Kingsway, Huyton, Liverpool, Merseyside, L36',
    description: 'CALLING ALL FIRST TIME BUYERS OR BUY TO LET INVESTORS... A three bedroom mid terrace property situated in a popular residential location close to schools, local amenities and travel networks including motorway and rail links. The accommodation briefly comprises of entrance...',
    price: 130000,
    type: 'Terraced',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/48k/47862/129971456/47862_S158355_IMG_00_0000_max_476x317.jpeg',
    address: 'Cobden Road, Southport, PR9 7TS',
    description: 'AN EARLY INTERNAL INSPECTION IS STRONGLY RECOMMENDED of this well planned semi-detached house which offers attractively proportioned accommodation, ideal for a first time buyer. Installed with gas central heating and upvc double glazing the property briefly comprises: Hall, Fron...',
    price: 157500,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/35k/34404/125616125/34404_31690115_IMG_00_0000_max_476x317.jpeg',
    address: 'Barlows Lane, Liverpool',
    description: 'Grosvenor Waterford are delighted to offer for sale this three detached property, situated on the popular Barlows Lane development. The spacious accommodation comprises in full; entrance hall, downstairs w.c., lounge, dining room, kitchen and conservatory. To the first floor are three bedrooms, t...',
    price: 210000,
    type: 'Detached',
    bedrooms: 3,
    bathrooms: 3,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/2k/1721/129969893/1721_ALT120532_IMG_05_0000_max_476x317.jpeg',
    address: 'Cleveley Road, Liverpool',
    description: 'Jones and Chapman are delighted to offer For Sale this Three bedroomed semi detached property located in the sought after L18 postcode',
    price: 380000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/13k/12162/127956149/12162_S141268_IMG_00_0000_max_476x317.jpeg',
    address: 'Halton Road, Runcorn',
    description: '**THREE BEDROOM TRADITIONAL TERRACED PROPERTY, EXTENDED GROUND FLOOR. RECENTLY FITTED KITCHEN & BATHROOM. VIEWING ADVISED. FULL MARKETING BROCHURE TO FOLLOW.** Adams Estate Agent offer to market this larger style three bedroom mid-terrace house located on Halton Road benefiting from an out...',
    price: 155000,
    type: 'Terraced',
    bedrooms: 3,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/2k/1741/126521321/1741_LSU107465_IMG_05_0000_max_476x317.jpeg',
    address: 'Wetherby Way, Little Sutton, Ellesmere Port',
    description: 'A fantastic example of a semi-detached family home that has been extended to offer an abundance of living space along with a ready to move in finish.',
    price: 225000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/5k/4980/129663521/4980_OLN220330_IMG_00_0000_max_476x317.jpeg',
    address: 'Ionic Road, Liverpool, Merseyside, L13',
    description: 'Entwistle Green are delighted to welcome to the sales market this outstanding three bedroom mid terrace with the added advantage of it being chain free. This property is one of the best you will see in its class, fully modernised and offering a fantastic living experience. The accommodation compr...',
    price: 160000,
    type: 'Terraced',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/104k/103727/129026726/103727_BHO221482_IMG_00_0000_max_476x317.jpeg',
    address: 'Hesketh Court, Rainford, St. Helens, Merseyside, WA11',
    description: 'Wonderfully presented 3 bedroom semi-detached home in Rainford Comprises of: Warm and welcoming entrance hallway Bright and airy living room with feature fireplace and patio doors to rear garden Dining room perfect for entertaining Modern and well-appointed kitchen ...',
    price: 325000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 3,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37269/129968771/37269_7126_GREB_IMG_00_0000_max_476x317.jpeg',
    address: 'St Pauls Close, Towerhill',
    description: '** THREE BED MID TERRACE** NO CHAIN** RECENTLY REFURBISHED** CUL DE SAC LOCATION** GREENBANK are delighted to offer to the sales market, this beautiful mid terrace house, located in the popular Towerhill area of Kirkby. This property would make an ideal first home and viewing is strongly advis',
    price: 115000,
    type: 'Terraced',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/32k/31079/129968702/31079_PRE220712_IMG_00_0000_max_476x317.jpeg',
    address: 'Willow Avenue, Whiston, Prescot, Merseyside, L35',
    description: 'Attention first time buyers and investors alike. This three bedroom semi detached property is the perfect first home or investment property being ideally located close to all the local amenities and public transport links along with motorway access. The property is within close proximity to the W...',
    price: 180000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37269/126477440/37269_6906_GREB_IMG_00_0000_max_476x317.jpeg',
    address: 'City Road, Liverpool',
    description: '** NO CHAIN** UNIQUE RESIDENTIAL PROPERTY ** CLOSE TO LOCAL AMENITIES** Greenbank are delighted to offer for sale this unique three bedroom end terrace house, located in the Walton area of Liverpool.',
    price: 97000,
    type: 'End of Terrace',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/69k/68791/129967022/68791_11756535_IMG_00_0000_max_476x317.jpeg',
    address: 'Southport Road, Lydiate',
    description: 'Arnold & Phillips are pleased to bring to market an exciting opportunity to acquire this beautifully presented four bedroom detached family home, situated along the highly regarded Southport Road in Ormskirk, West Lancs. Ideally positioned this vibrant property resides within close proximity ...',
    price: 395000,
    type: 'Detached',
    bedrooms: 4,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/245k/244991/129966914/244991_BEB220809_IMG_00_0000_max_476x317.jpeg',
    address: 'Town Lane, Bebington, Wirral',
    description: 'A traditional family home in a fantastic location! With some lovely original features, this property benefits from generous room sizes, a large rear garden and access to schools, shops and transport links! Everything you could need on your doorstep!',
    price: 210000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/1k/837/129966500/837_AIN222149_IMG_00_0000_max_476x317.jpeg',
    address: 'Manor Fell, Palacefields, Runcorn, WA7',
    description: 'Entwistle green are delighted to bring to market this modern living 3 bedroom semi-detached home. Having been extended to suit family lifestyle, the property has undergone extensive modernisation. The ground floor consists of a large open plan kitchen/family room leading onto a loft con...',
    price: 235000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/43k/42623/128699666/42623_SPT220429_IMG_00_0000_max_476x317.jpeg',
    address: 'Apartment 6, Southport, Merseyside, PR8',
    description: 'Ball & Percival Southport are delighted to offer for sale a well presented three bedroom apartment located in the salubrious Shoreside of Birkdale. Serviced by a lift to all floors, this property is boasting spacious accommodation throughout and benefits from double glazing, gas central heati...',
    price: 275000,
    type: 'Apartment',
    bedrooms: 3,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/8k/7961/127563080/7961_WTN220788_IMG_00_0000_max_476x317.jpeg',
    address: 'Torcross Way, Halewood, Liverpool, Merseyside, L26',
    description: 'Brought to the market with no chain delay, Whitegates Woolton bring to market this much loved two bed property ideal for first time buyers.',
    price: 165000,
    type: 'Semi-Detached',
    bedrooms: 2,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/219k/218180/129965663/218180_WYS221497_IMG_00_0000_max_476x317.jpeg',
    address: 'Gorsedale Road, Wallasey, Wirral',
    description: 'Generous size South facing garden and no onward chain! Conveniently situated close to handy transport links and excellent schooling, this three bedroom semi-detached is ideal for the first time buyer, investor or if you are simply looking to downsize.',
    price: 120000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/204k/203162/129965636/203162_1468437-1_IMG_00_0000_max_476x317.jpeg',
    address: 'Overpool Road, Great Sutton, CH66',
    description: '****NO CHAIN**** EXTENDED THREE BEDROOMS TWO RECEPTION ROOMS MODERN KITCHEN LARGE PRIVATE REAR GARDEN GARAGE Offering to the market this spacious three bedroom property, situated on a large plot, located in the sought after area of Great Sutton, close to local schools, amenities and ...',
    price: 240000,
    type: 'Semi-Detached',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/5k/4980/129965576/4980_OLN220345_IMG_00_0000_max_476x317.jpeg',
    address: 'Lordens Road, Liverpool, L14',
    description: 'Entwistle Green are delighted to welcome to the sales market this excellent three bedroom end of terrace. The property is located in an area with excellent local amenities including schools, hospitals, local shops and restaurants, frequent bus services and a short drive to the motorway network. T...',
    price: 126995,
    type: 'End of Terrace',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk:443/dir/crop/10:9-16:9/95k/94193/129965555/94193_LIV220583_IMG_01_0000_max_476x317.jpeg',
    address: 'Park Street, Liverpool, Merseyside, L8',
    description: 'Reeds Rains are delighted to offer this wonderful two bedroom, top floor floor apartment, located just a 5 minute drive from Liverpool City Centre. The apartment briefly comprises of entrance hallway, bathroom to the left, second bedroom to the right, main bedroom to the far right with...',
    price: 135000,
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/122k/121735/129965513/121735_HUB721197_IMG_00_0000_max_476x317.jpeg',
    address: 'Stewards Avenue, Widnes, Cheshire',
    description: 'Set on a corner plot and benefiting from a generous plot is this four bedroom semi detached family home being offer for sale with no onward chain. The property is located within close proximity to schools, the shopping centre offering a wide variety of shops and easy transport links offering acce...',
    price: 150000,
    type: 'Semi-Detached',
    bedrooms: 4,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/225k/224435/129965249/224435_895123_IMG_00_0000_max_476x317.jpeg',
    address: 'Hale View Road, Helsby, Frodsham',
    description: 'A detached dormer bungalow in a much sought after residential area offering spacious accommodation that has been extensively refurbished over the past 3 years.',
    price: 435000,
    type: 'Detached Bungalow',
    bedrooms: 3,
    bathrooms: 2,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/204k/203528/129964853/203528_1475542-1_IMG_00_0000_max_476x317.jpeg',
    address: 'Medbourne Crescent, Liverpool, L32',
    description: 'Set in a fantastic position this delightful three bedroom home provides excellent living space with quality fitments and tasteful décor throughout. Perfect for first time buyers, landlords or for those looking for a starter home for their young family, this property has a great deal to offer. ...',
    price: 125000,
    type: 'Terraced',
    bedrooms: 3,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    },
    {
    image: 'https://media.rightmove.co.uk/dir/crop/10:9-16:9/50k/49656/129964793/49656_32003248_IMG_00_0000_max_476x317.jpeg',
    address: 'Greenfield Road, Dentons Green, St. Helens',
    description: 'No upward chain involved Stapleton Derby are delighted to offer for sale this extended two bedroom mid garden fronted terrace property. Benefitting from a gas central heating system and double glazing , the accommodation briefly comprises of entrance porch, spacious lounge/dining room, modern ex...',
    price: 130000,
    type: 'Terraced',
    bedrooms: 2,
    bathrooms: 1,
    newHome: '',
    recentlyAdded: ''
    }
]

const contentContainer = document.querySelector(".content-container");
const contentLoader = document.getElementById('content-loader');

function ready() {
    function renderProperties(property) {
        let html = ''

        property.forEach((house) => {
        html = html + `

        <div class='house-card'>
            <div class='image-container'>
                <div class="bookmark-icon">
                    <i class="bi-suit-heart-fill bookmark"></i>
                </div>
                <img src=${house.image} alt="" />
            </div>

            <div class='text-container'>
                <div class='house-details'>
                    <h3 class="address">${house.address}</h3>
    
                    <div class="icon-container">
                        <p class="type"><i class="bi bi-house"></i>${house.type}</p>
                        <p class="bedrooms"><img class="icon" src="icons/icons8-bedroom-96.png" alt="">${house.bedrooms}</p>
                        <p class="bathrooms"><img class="icon" src="icons/icons8-bath-100.png" alt="">${house.bathrooms}</p>
                    </div>

                    <div class="home-status">
                        <div class="new-home">${house.newHome}</div>
                        <div class="recently-added">${house.recentlyAdded}</div>
                    </div>
                </div>

                <div class="description">
                    <h2>Description</h2>
                    <p>${house.description}</p>
                </div>

                <div class="button-container">
                    <h2 class="price">£${house.price}</h2>                    
                    <button class="view-property">
                        <p>View Property</p>
                    </button>
                </div>
            </div>
        </div>
        `

        })
    contentContainer.insertAdjacentHTML('beforeend', html)

    }

renderProperties(propertyListings)

// Filter Lists for Quick Searches

const recentlyAdded = propertyListings.filter((item) => {
    return item.recentlyAdded === 'Recently Added';
})

const newHomes = propertyListings.filter((item) => {
    return item.newHome === 'New Home';
})

const twoBedHouses = propertyListings.filter((item) => {
    return item.bedrooms === 2;
})

const threeBedHouses = propertyListings.filter((item) => {
    return item.bedrooms === 3;
})

function toggleOptions(list) {
    contentContainer.innerHTML = ''
    renderProperties(list)
    addBookMark()
    sortByPrice()
    sortByBedrooms()
    renderDetailedView()
}

const toggleLists = [propertyListings, recentlyAdded, newHomes, twoBedHouses, threeBedHouses]
const toggleMenuSearchButtons = document.querySelectorAll('ul.toggle-searches li')

for (let i = 0; i < toggleMenuSearchButtons.length; i++) {
    toggleMenuSearchButtons[i].addEventListener('click', function() {
        toggleOptions(toggleLists[i]);
        // Event to remove loading screen
    })
}

const belowMarketButton = document.querySelector('.below-market-value')

belowMarketButton.addEventListener('click', function() {
    total = 0;

    for (let i = 0; i < houseCards.length; i++ ) {
        total += parseFloat(houseCards[i].lastElementChild.lastElementChild.
        querySelector('h2').innerText.replace(/£/g, ''));
    }

    let totalProperties = houseCards.length;
    let averagePrice = (total/totalProperties);

    for (let i = 0; i < houseCards.length; i++ ) {
        let houses = houseCards[i].lastElementChild.lastElementChild.
        querySelector('h2').innerText.replace(/£/g, '');

        if (houses <= averagePrice) {
            houseCards[i].classList.remove('hidden')
        } else {
            houseCards[i].classList.add('hidden')
        }
    }
});

sortByBedrooms()
sortByPrice()
}

ready()

// sort price ascending and descending

const sortingOptionsToggleDisplay = document.querySelector('.sorting-options-toggle');
const sortingOpttionsContainer = document.querySelector('.sorting-options');
const sortingOptionsToggleIcon = document.querySelector('.sorting-options-toggle i');

sortingOptionsToggleDisplay.addEventListener('click', ()=> {
    sortingOpttionsContainer.classList.toggle('hidden');
    sortingOptionsToggleIcon.classList.toggle('active')
})

function sortByPrice() {

    let cards = document.querySelectorAll('.house-card');
    const sortPriceAscending = document.querySelector('.sort-by-price.ascending');
    const sortPriceDescending = document.querySelector('.sort-by-price.descending');

    sortPriceAscending.addEventListener('click', sortByAscending)
    sortPriceDescending.addEventListener('click', sortByDescending)

    function sortByAscending() {
        Array.from(cards).sort(function(a, b) {
            a = parseInt(a.querySelector('.price').innerText.replace(/£/g, ''));
            b = parseInt(b.querySelector('.price').innerText.replace(/£/g, ''));
            return (a > b) - (a < b)
        }).forEach(function(n, i) {
            n.style.order = i;
        });
    }

    function sortByDescending() {
        Array.from(cards).sort(function(a, b) {
            a = parseInt(a.querySelector('.price').innerText.replace(/£/g, ''));
            b = parseInt(b.querySelector('.price').innerText.replace(/£/g, ''));
            return (a < b) - (a > b)
        }).forEach(function(n, i) {
            n.style.order = i;
        });
    }
}

function sortByBedrooms() {
    let cards = document.querySelectorAll('.house-card');
    const sortBedroomsAscending = document.querySelector('.sort-by-bedrooms.ascending');
    const sortBedroomsDescending = document.querySelector('.sort-by-bedrooms.descending');

    sortBedroomsAscending.addEventListener('click', sortByAscending)
    sortBedroomsDescending.addEventListener('click', sortByDescending)

    function sortByAscending() {
        Array.from(cards).sort(function(a, b) {
            a = parseInt(a.querySelector('.bedrooms').innerText.replace(/£/g, ''));
            b = parseInt(b.querySelector('.bedrooms').innerText.replace(/£/g, ''));
            return (a > b) - (a < b)
        }).forEach(function(n, i) {
            n.style.order = i;
        });
    }

    function sortByDescending() {
        Array.from(cards).sort(function(a, b) {
            a = parseInt(a.querySelector('.bedrooms').innerText.replace(/£/g, ''));
            b = parseInt(b.querySelector('.bedrooms').innerText.replace(/£/g, ''));
            return (a < b) - (a > b)
        }).forEach(function(n, i) {
            n.style.order = i;
        });
    }
}

// Price slider code

const priceSlider = document.getElementById('slider')
const sliderValue = document.querySelector('#slider-value')
const houseCards = contentContainer.children;
sliderValue.innerHTML = priceSlider.value;

priceSlider.oninput = function() {
    let value = (this.value - this.min)/(this.max - this.min)*100;
    priceSlider.style.background = 'linear-gradient(to right, #1a1a1a 0%, #1a1a1a ' + value + '%, #9b9b9b ' + value + '%, #9b9b9b 100%)';

    sliderValue.innerHTML = Math.round((this.value/1000))*1000;
    const sliderPrice = parseInt(sliderValue.innerHTML)

    for (let i = 0; i < houseCards.length; i++) {
        const housePrice = houseCards[i].lastElementChild.lastElementChild.querySelector('h2')
        .innerText.replace(/£/g, '');
        const price = parseInt(housePrice)

        if (price > sliderPrice) {
            houseCards[i].classList.add('hidden')
        } else {
            houseCards[i].classList.remove('hidden')
        }
    }
}

// Bookmark Code

const bookmark = document.getElementsByClassName('bookmark-icon');
const savedPropertiesContainer = document.querySelector('.saved-property-list');
const bookmarkEmptyMessage = document.querySelector('.panel-top p');
const bookmarkCount = document.getElementById('bookmark-count');

function checkBookMarkIsEmpty() {
    if ( localStorage.getItem('saved-properties') !== '0' && localStorage.getItem('saved-properties') !== null) {
        bookmarkCount.style.backgroundColor = '#f93c3c';
        bookmarkEmptyMessage.classList.add('hidden');
    } else {
        bookmarkCount.style.backgroundColor = '#969696'
        bookmarkEmptyMessage.classList.remove('hidden');
    }
}

function addBookMark() {

for (let i = 0; i < bookmark.length; i++ ) {
    bookmark[i].addEventListener('click', () => {

        const image = houseCards[i].firstElementChild.querySelector('img').src;
        const address = houseCards[i].querySelector('h3').innerText;
        const price = parseInt(houseCards[i].querySelector('h2.price').innerText.replace(/£/g, ''));
        const bedrooms = houseCards[i].querySelector('p.bedrooms').innerText;
        const bathrooms = houseCards[i].querySelector('p.bathrooms').innerText;
        const houseType = houseCards[i].querySelector('p.type').innerText;
        const description = houseCards[i].querySelector('.description').querySelector('p').innerText;
        const newHome = houseCards[i].querySelector('.new-home').innerText;
        const recentlyAdded = houseCards[i].querySelector('.recently-added').innerText;

        savedPropertiesContainer.innerHTML += `

            <div class="bookmark-card">
                <div class="image">
                    <div class="remove-bookmark-button">
                        <i class="bi bi-trash bookmark"></i>
                    </div>
                    <img src="${image}" alt="">
                </div>

                <div class="details">
                    <h3 class="address">${address}</h3>

                    <div class="icon-container">
                        <p class="type"><i class="bi bi-house"></i>${houseType}</p>
                        <p class="bedrooms"><img class="icon" src="icons/icons8-bedroom-96.png" alt="">${bedrooms}</p>
                        <p class="bathrooms"><img class="icon" src="icons/icons8-bath-100.png" alt="">${bathrooms}</p>
                    </div>

                    <div class="home-status">
                        <div class="new-home">${newHome}</div>
                        <div class="recently-added">${recentlyAdded}</div>
                    </div>

                    <div class="description">${description}</div>

                    <div class="button-container">
                        <h2 class="price">£${price}</h2>                    
                        <button class="view-property">
                            <p>View Property</p>
                        </button>
                    </div>
                </div>
            </div>
        `;

        checkBookMarkIsEmpty()
        savePropertyListings()
        renderDetailedViewFromBookmarks()
    });
}}

function savePropertyListings() {
    localStorage.setItem('property-listings', savedPropertiesContainer.innerHTML);
    let bookmarksCount = savedPropertiesContainer.children.length;
    localStorage.setItem('saved-properties', bookmarksCount);
    let count = localStorage.getItem('saved-properties');
    bookmarkCount.innerText = count;
    checkBookMarkIsEmpty()
    removeBookmark()
}

function renderSavedProperties() {
    let bookmarks = localStorage.getItem('property-listings');
    let count = localStorage.getItem('saved-properties');

    if (count == null && bookmarks == null) {
        savedPropertiesContainer.innerHTML = ''
        bookmarkCount.innerText = '0';
    } else {
        savedPropertiesContainer.insertAdjacentHTML('afterbegin', bookmarks);
        bookmarkCount.innerText = count;
    }

    checkBookMarkIsEmpty()
    removeBookmark()
}

function removeBookmark() {
    const bookmarkedProperties = savedPropertiesContainer.children;
    for (let i = 0; i < bookmarkedProperties.length; i++ ) {
        bookmarkedProperties[i].querySelector('.remove-bookmark-button').addEventListener('click', deleteBookmark);
    }
}

function deleteBookmark(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove()
    savePropertyListings()
    checkBookMarkIsEmpty()
}

renderSavedProperties()
addBookMark()
renderDetailedViewFromBookmarks()

// Bookmarks Panel Code

const dimBackground = document.querySelector('.dim-background')
const bookmarksPanel = document.querySelector('.bookmarks-panel');
const showBookmarksPanelButton = document.querySelector('li.show-bookmarks');
const hideBookmarksPanelButton = document.querySelector('i.bi.bi-x-circle')

showBookmarksPanelButton.addEventListener('click', () => {
    bookmarksPanel.classList.add('visible');
    dimBackground.classList.add('visible');
});

function hideBookmarksPanel() {
    bookmarksPanel.classList.remove('visible');
    dimBackground.classList.remove('visible');
}

document.addEventListener('keydown', function(event) {
    if (event.key == 'Escape') {
        hideBookmarksPanel()
    }
})

dimBackground.addEventListener('click', () => {
    hideBookmarksPanel()
})

hideBookmarksPanelButton.addEventListener('click', hideBookmarksPanel);

// Toggle Card View Code

const toggleView = document.querySelector('.grid-view')
const text = toggleView.querySelector('span')
const toggleIcon = toggleView.firstChild;

function toggleCardView() {
    for (let i = 0; i < houseCards.length; i++) {
        if (houseCards[i].classList.contains('list')) {
            houseCards[i].classList.remove('list')
        } else {
            houseCards[i].classList.add('list')
        }
    }

    if (toggleIcon.classList.contains('bi-grid')) {
        toggleIcon.classList.remove('bi-grid')
        toggleIcon.classList.add('bi-list-ul')
        text.innerText = 'List'
    } else {
        toggleIcon.classList.remove('bi-list-ul')
        toggleIcon.classList.add('bi-grid')
        text.innerText = 'Grid'
    }
}

toggleView.addEventListener('click', toggleCardView);

// Dark Mode Code

const darkModeToggle = document.querySelector('li.toggle-lighting-mode');
const toggleThemeButtonIcon = darkModeToggle.firstElementChild;
const toggleThemeButtonText = darkModeToggle.querySelector('p');
let pageTheme = document.getElementById('theme-link')

darkModeToggle.addEventListener('click', toggleTheme)

function toggleTheme() {
    if (pageTheme.getAttribute('href') == 'styles-light.css') {
        setDarkTheme()
    } else {
        setLightTheme()
    }
}

function setDarkTheme() {
    pageTheme.href = 'styles-dark.css';
    localStorage.setItem('theme', 'styles-dark.css')
    toggleThemeButtonIcon.classList.remove('bi-moon')
    toggleThemeButtonIcon.classList.add('bi-sun')
    toggleThemeButtonText.innerText = 'Toggle Light Mode'
}

function setLightTheme() {
    pageTheme.href = 'styles-light.css';
    localStorage.setItem('theme', 'styles-light.css')
    toggleThemeButtonIcon.classList.remove('bi-sun')
    toggleThemeButtonIcon.classList.add('bi-moon')
    toggleThemeButtonText.innerText = 'Toggle Dark Mode'
}

if (localStorage.getItem('theme') == 'styles-dark.css') {
    setDarkTheme()
} else {
    setLightTheme()
}

// Mobile Side Panel

const toggleSidePanelMobile = document.querySelector('.toggle-menu');
const sidePanel = document.querySelector('.side-panel');
const sidePanelCloseMobile = document.querySelector('.side-panel-top i');

toggleSidePanelMobile.addEventListener('click', () => {
    sidePanel.classList.toggle('active')
})

sidePanelCloseMobile.addEventListener('click', () => {
    sidePanel.classList.remove('active')
})

const sidePanelActiveButtons = sidePanel.getElementsByTagName('li')

for (let i = 0; i < sidePanelActiveButtons.length; i++) {
    sidePanelActiveButtons[i].addEventListener('click', () => {
        if (sidePanelActiveButtons[i].classList.contains('toggle-search')) {
            sidePanel.classList.remove('active')
        }
    })
}

// Search Bar Filter

const searchBar = document.querySelector('.search-bar-input');

searchBar.oninput = function() {
    let filter = searchBar.value.toUpperCase();
    let houses = document.querySelectorAll('.house-card');

    for (let i = 0; i < houses.length; i++) {
        if (houses[i].lastElementChild.firstElementChild.
            querySelector('h3.address').innerText.toUpperCase().includes(filter)) {
                houses[i].style.display = ''
            } else {
                houses[i].style.display = 'none'
            }
    }
}

// Open more detailed view of cards

function renderDetailedView() {

    for (let i = 0; i < houseCards.length; i++) {
    const viewPropertyButtons = houseCards[i].lastElementChild.lastElementChild.querySelector('.view-property')
    
    viewPropertyButtons.addEventListener('click', ()=> {
        
        const image = houseCards[i].firstElementChild.querySelector('img').src;
        const address = houseCards[i].querySelector('h3').innerText;
        const price = parseInt(houseCards[i].querySelector('h2.price').innerText.replace(/£/g, ''));
        const bedrooms = houseCards[i].querySelector('p.bedrooms').innerText;
        const bathrooms = houseCards[i].querySelector('p.bathrooms').innerText;
        const houseType = houseCards[i].querySelector('p.type').innerText;
        const description = houseCards[i].querySelector('.description').querySelector('p').innerText;
        const newHome = houseCards[i].querySelector('.new-home').innerText;
        const recentlyAdded = houseCards[i].querySelector('.recently-added').innerText;

        let detailedView = ''
        detailedView = detailedView + `

            <div class="detailed-view">
                <div class="first-content-wrapper">
                    <div class="detailed-image-container">
                        <img src="${image}" alt="">
                    </div>

                    <div class="text-content">
                        <div>
                        
                            <h1 class="address">${address}</h1>

                            <div class="house-details">
                                <h1 class="price">£${price}</h1>
                                <div class="new-home">${newHome}</div>
                                <div class="recently-added">${recentlyAdded}</div>
                            </div>

                            <div class="icon-container">
                                <p class="type"><i class="bi bi-house"></i>${houseType}</p>
                                <p class="bedrooms"><img class="icon" src="icons/icons8-bedroom-96.png" alt="">${bedrooms}</p>
                                <p class="bathrooms"><img class="icon" src="icons/icons8-bath-100.png" alt="">${bathrooms}</p>
                            </div>

                            <div class="description">
                                <h2>Description</h2>

                                <p>${description}</p>
                            </div>
                        </div>

                        <div class="detailed-view-button">
                            <button class="close-detailed-view">Close</button>
                            <button class="view-property">Visit Property Link</button>
                        </div>
                    </div>
                </div>
            </div>
            `

            const detailedViewContainer = document.querySelector('.detailed-view-container');
            detailedViewContainer.insertAdjacentHTML('afterbegin', detailedView)

            dimBackground.classList.add('visible')

            const closeWindowButton = document.querySelector('.close-detailed-view');
            const detailedViewCard = document.querySelector('.detailed-view');

            document.addEventListener('keydown', function(event) {
                if (event.key == 'Escape') {
                    removeDetailedCard()
                }
            })

            closeWindowButton.addEventListener('click', removeDetailedCard);

            function removeDetailedCard() {
                detailedViewCard.remove()
                dimBackground.classList.remove('visible')
            }

            if (dimBackground.classList.contains('visible')) {
                dimBackground.addEventListener('click', removeDetailedCard)
            }
        });
    };
}

renderDetailedView()

function renderDetailedViewFromBookmarks() {

const bookmarkCards = savedPropertiesContainer.children;
for (let i = 0; i < bookmarkCards.length; i++) {
    const viewSavedPropertyButton = bookmarkCards[i].lastElementChild.lastElementChild.querySelector('.view-property');
    viewSavedPropertyButton.addEventListener('click', ()=> {

        const image = bookmarkCards[i].firstElementChild.querySelector('img').src;
        const address = bookmarkCards[i].querySelector('h3').innerText;
        const price = parseInt(bookmarkCards[i].querySelector('h2.price').innerText.replace(/£/g, ''));
        const bedrooms = bookmarkCards[i].querySelector('p.bedrooms').innerText;
        const bathrooms = bookmarkCards[i].querySelector('p.bathrooms').innerText;
        const houseType = bookmarkCards[i].querySelector('p.type').innerText;
        const description = bookmarkCards[i].querySelector('.description').innerText;
        const newHome = houseCards[i].querySelector('.new-home').innerText;
        const recentlyAdded = houseCards[i].querySelector('.recently-added').innerText;

        let detailedView = ''
        detailedView = detailedView + `

            <div class="detailed-view">
                <div class="first-content-wrapper">
                    <div class="detailed-image-container">
                        <img src="${image}" alt="">
                    </div>

                    <div class="text-content">
                        <div>
                        
                            <h1 class="address">${address}</h1>

                            <div class="house-details">
                                <h1 class="price">£${price}</h1>
                                <div class="new-home">${newHome}</div>
                                <div class="recently-added">${recentlyAdded}</div>
                            </div>

                            <div class="icon-container">
                                <p class="type"><i class="bi bi-house"></i>${houseType}</p>
                                <p class="bedrooms"><img class="icon" src="icons/icons8-bedroom-96.png" alt="">${bedrooms}</p>
                                <p class="bathrooms"><img class="icon" src="icons/icons8-bath-100.png" alt="">${bathrooms}</p>
                            </div>

                            <div class="description">
                                <h2>Description</h2>

                                <p>${description}</p>
                            </div>
                        </div>

                        <div class="detailed-view-button">
                            <button class="close-detailed-view">Close</button>
                            <button class="view-property">Visit Property Link</button>
                        </div>
                    </div>
                </div>
            </div>
            `

            const detailedViewContainer = document.querySelector('.detailed-view-container');
            detailedViewContainer.insertAdjacentHTML('afterbegin', detailedView)

            const closeWindowButton = document.querySelector('.close-detailed-view');
            const detailedViewCard = document.querySelector('.detailed-view');

            document.addEventListener('keydown', function(event) {
                if (event.key == 'Escape') {
                    removeDetailedCard()
                }
            })

            closeWindowButton.addEventListener('click', removeDetailedCard);

            function removeDetailedCard() {
                detailedViewCard.remove()
            }
        })
    }
};