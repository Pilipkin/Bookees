import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

    createDb(){
        let books = [
            {
                id:1,
                title:'To Kill a Mockingbird',
                author:'Harper Lee',
                img:'http://cdn-media-2.lifehack.org/wp-content/files/2015/03/50-anniversary-cover1.jpg',
                about:'Published in 1960, this timeless classic explores human behaviour and the collective conscience of The Deep South in the early 20th century. Humour entwines the delicate strands of prejudice, hatred, hypocrisy, love and innocence to create one of the best novels ever written.',
                date:1960
            },
            {
                id:2, title:'The Lord of the Rings',
                author:'J.R.R. Tolkien',
                img:'http://cdn-media-1.lifehack.org/wp-content/files/2015/03/9780618640157_custom-s6-c30.jpg',
                about:'Middle Earth is a wonderful, expansive fantasy world filled with turmoil, heroes, evil and innocence. Although our protagonist Frodo Baggins’ quest seems impossible to complete, this trilogy is a tale of triumph in the most impossible circumstances.',
                date:1955
            },
            {
                id:3,
                title:'The Great Gatsby',
                author:'F. Scott Fitzgerald',
                img:'http://cdn-media-1.lifehack.org/wp-content/files/2015/03/Penguin-2.jpg',
                about:'Published in 1925, Fitzgerald’s The Great Gatsby explores the decadence of the Jazz Age, and one man’s introduction into a world where even those with the most indulgent lives cannot earn love.',
                date:1925
            },
            {
                id:4,
                title:'The Book Thief',
                author:'Markus Zusak',
                img:'http://cdn-media-1.lifehack.org/wp-content/files/2015/03/71h2sjik5al-_sl1380_.jpg',
                about:'Set in Germany during 1939, The Book Thief follows Liesel as she rescues books from the tyranny of Nazi rule. Meanwhile, her family has hidden a Jewish fighter in their basement and death looks down on the family, narrating our tale. Experience bravery that is rarely found in the world, and friendship that is formed in the most unlikely of situations.',
                date:2005
            },
            {
                id:5,
                title:'Fahrenheit 451',
                author:'Ray Bradbury',
                img:'http://cdn-media-1.lifehack.org/wp-content/files/2015/03/tumblr_nd4wnpO3ZS1tv8vcro1_r1_1280.jpg',
                about:'Books are forbidden, and it is our main character Guy Montag’s job to burn any books he comes across. Often compared to George Orwell’s 1984, Ray Bradbury’s dystopian world is an unsettling commentary on Western societies’ addiction and dependence on the media and conformity.',
                date:1953
            },
            {
                id:6,
                title:'Animal Farm',
                author:'George Orwell',
                img:'http://cdn-media-2.lifehack.org/wp-content/files/2015/03/animal_farm_cover2014.jpg',
                about:'This famous 1945 satire, examines the realistic risks of revolution and the dynamics animals will inevitably give in to.',
                date:1945
            },
            {
                id:7,
                title:'Gone with the Wind',
                author:'Margaret Mitchell',
                img:'http://cdn-media-1.lifehack.org/wp-content/files/2015/03/gone-with-the-wind.jpg',
                about:'Set in The South during The Civil War, chances are if you love the movie you’ll love the book. Although the main character and the world she lives in is loathsome, readers’ opinions are twisted as this novel dishes out a fated justice when both Scarlett and The South lose their wars.',
                date:1936
            },
            {
                id:8,
                title:'A Tale of Two Cities',
                author:'Charles Dickens',
                img:'http://cdn-media-2.lifehack.org/wp-content/files/2015/03/twocities.jpg',
                about:'Following eighteen years as a political prisoner, Dr Manette is released and returns to England with his daughter Lucie. There, two very different men fall in love with Lucie and become entwined in a tale of love and sacrifice.',
                date:'15.15.15'
            },
            {
                id:9,
                title:'Frankenstein',
                author:'Mary Shelley',
                img:'http://cdn-media-1.lifehack.org/wp-content/files/2015/03/frankenstein_book_cover_by_mario0357-d6rszr0.jpg',
                about:'A combination of gothic thriller, cautionary tale and romance novel, Frankenstein is a story like no other. Written by Mary Shelley when she was just eighteen, Frankenstein prompts readers to ask themselves some truly shattering questions: what makes us human? What do we owe to one another as living creatures? How far can science push the boundaries of nature?',
                date:1859
            }
        ];
        return {books};
    }
}