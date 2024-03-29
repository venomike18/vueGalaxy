const app = Vue.createApp({
    data() {
        return {
            
            //test v-for
            names: ['Susan', 'Peter', 'Bill' ],


            productName: 'Book a Cruise to the Moon',
            productDescription: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
            
            // additional properties later
            productImage: 'assets/cruise.jpg',
            productImageDescription: 'An astronaut floats outside the window while you sit in comfort',
            productImageStyle: {
                'border-radius': '15px'
            },

            imageSource: './media/sample.jpg',
            classObject: {
                centered: true,
                active: true
            
            },
            styleObject: {
                'background-color': 'cyan',
            }
        }
    },
});