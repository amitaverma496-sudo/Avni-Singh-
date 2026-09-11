import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What chocolate do you actually like and consider a favourite?',
    options: [
      'Ultra sweet milk chocolate bars',
      'Dark chocolate & Amul Fruit & Nut',
      'Plain white vanilla bars'
    ],
    correctIndex: 1,
    explanation: 'You specifically mentioned dark chocolate as one of your favourites, along with Amul Fruit & Nut!'
  },
  {
    id: 'q2',
    question: 'Which trio of creative hands-on skills did you casually reveal knowing?',
    options: [
      'Origami, pottery, & glassblowing',
      'Sewing, embroidery, & crochet',
      'Calligraphy, woodworking, & knitting'
    ],
    correctIndex: 1,
    explanation: 'Sewing, embroidery, AND crochet. You genuinely know all three.'
  },
  {
    id: 'q3',
    question: 'What is high on your list of all-time favourite foods?',
    options: [
      'Chole bhature',
      'Sushi rolls',
      'Caesar salad'
    ],
    correctIndex: 0,
    explanation: 'Chole bhature without hesitation.'
  },
  {
    id: 'q4',
    question: 'What is your reality when it comes to cooking at home?',
    options: [
      'You make fries, ramen, & pasta for yourself surprisingly well',
      'You happily cook 6-course meals for the whole family every day',
      'You strictly live on microwave popcorn and takeout'
    ],
    correctIndex: 0,
    explanation: 'You can cook great things for yourself (fries, ramen, pasta), even if family feasts are a whole other story.'
  },
  {
    id: 'q5',
    question: 'What intriguing topic did you show interest in and talk about getting checked?',
    options: [
      'Stock market algorithm charts',
      'Astrology & numerology',
      '18th-century antique furniture'
    ],
    correctIndex: 1,
    explanation: 'You were interested in astrology and even talked about getting your numerology checked!'
  },
  {
    id: 'q6',
    question: 'What did you say about how you connect with animals?',
    options: [
      'You tend to become friends with animals before people',
      'You only like animals on nature documentaries',
      'You only tolerate exotic parrots'
    ],
    correctIndex: 0,
    explanation: 'You feed the neighborhood animals and said you often befriend animals before people!'
  }
];
