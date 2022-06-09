
//ICONS
import moon from './icons/sleeping.png'
import calm from './icons/calm.png'
import gift from './icons/gift.png'
import health from './icons/healthcare.png'
import laugh from './icons/laugh.png'
import butterfly from './icons/let-it-go.png'
import mentalHealth from './icons/mental-health.png'
import park from './icons/park.png'
import headPlant from './icons/philosophy.png'
import positive from './icons/positive.png'
import food from './icons/salad.png'
import learn from './icons/study.png'
import workPositive from './icons/working.png'
import selfLove from './icons/self-love.png'
import relax from './icons/coffee-cup.png'
import freedom from './icons/pigeon.png'
import friends from './icons/support.png'
import love from './icons/love.png'
import depression from './icons/support-hands.png'


export const questions = [
    {
        question: "Did you have a bad night of sleep? Have you slept too little most days this week?",
        yesValue: "I'm tired asf/I suffer from insomnia",
        noValue: "I've slept like a baby",
        answer: "You need to get some more sleep. Try getting earlier to bed today or take a short nap. If you suffer from insomnia, I recommend seeing a medical professional who can help you.",
        image: <img src={moon} className="image" alt="Sleep"></img>,
    },
    {
        question: "Do you have a lot of stress right now? Something big happening in your life?",
        yesValue: "Alot of shit is going on, I can't calm down",
        noValue: "Everything is fine, I have peace of mind",
        answer: "Stress is a part of life unfortunately, but most things will pass. However, try to find time to relax and do something you enjoy. Meditate, play video games, watch a movie, do something to let your head rest.",
        image: <img src={calm} className="image" alt="Sleep"></img>,
    },
    {
        question: "Are you hungry? Have you forgotten to eat a proper meal?",
        yesValue: "I'm hangry! Gimme food!",
        noValue: "I'm fine, thank you",
        answer: "Go eat something that makes you feel good. Try to avoid junk food, because that can eventually make you feel bad afterwards.",
        image: <img src={food} className="image" alt="Sleep"></img>,
    },
    {
        question: "Have you been inactive and spent most of the day inside?",
        yesValue: "I've been inside all day",
        noValue: "I've been outside, seen the world a bit",
        answer: "Go outside for a walk or something. Changing your scenery and fresh air is good for you. Sometimes just a 30min walk outside can make a big difference in your mood.",
        image: <img src={park} className="image" alt="Sleep"></img>,
    },
    {
        question: "Have you spent the day with taxing people? Had to deal with difficult people?",
        yesValue: "So f*cking annoying!",
        noValue: "I've had a good time socializing",
        answer: "Process your feelings. Try to find someone to talk to. Someone you like, trust and feel comfortable being around. Another option, is taking some time for yourself, taking a break from people.",
        image: <img src={laugh} className="image" alt="Sleep"></img>,
    },
    {
        question: "Has someone judged you or treated you badly today? Has someone hurt your feelings?",
        yesValue: "I'm upset. Humans suck!",
        noValue: "Everyone has treated me well",
        answer: "Don't waste energy on negative thoughts and people. Process your feelings, maybe talk to someone you trust and then let it go. Consider if there's a need for confrontation, but don't make rash decisions, sleep on it. ",
        image: <img src={butterfly} className="image" alt="Sleep"></img>,
    },
    {
        question: "Is a certain person or issue troubling you? You keep thinking about one thing obsessively?",
        yesValue: "I can't let it go, I'm stuck in a loop",
        noValue: "Nothing bothers me right now",
        answer: " Process your feelings. Write or talk to someone you trust. Try to find a way to let things go. If you feel there's something you can do or change, sleep on it, and then take action. However, be sure to assess the situation, don't make rash decisions.",
        image: <img src={freedom} className="image" alt="Sleep"></img>,
    },
    {
        question: "Are you thinking about bad memories, having negative thoughts about something?",
        yesValue: "I keep spiraling into an abyss of shit",
        noValue: "I'm in control of my mind",
        answer: "Process your feelings and don't give your negative thoughts control. Talk to someone you trust or write. If you keep slipping back, try to keep yourself busy, so your mind has less time to wander.",
        image: <img src={positive} className="image" alt="Sleep"></img>,
    },
    {
        question: "Do you regret or feel like you could be doing something differently?",
        yesValue: "I've made some awful choices",
        noValue: "I'm happy with how things are in my life",
        answer: "You can't change the past, only learn from it. If you can make a change, think about how you can make things better. Make a list or mindmap. They say every journey starts with one step.",
        image: <img src={learn} className="image" alt="Sleep"></img>,
    },
    {
        question: "Have you been busy all day with work/obligations, not having any time for yourself?",
        yesValue: "I haven't had any time for myself",
        noValue: "I've had some alone time and done fun stuff",
        answer: "Make time for yourself. Take a break. Do something you enjoy. I know it might not be easy, if you have a busy schedule. But you and your brain will thank you for a much needed break.",
        image: <img src={relax} className="image" alt="Sleep"></img>,
    },
    {
        question: "Are you shaming yourself? Are you shaming your body, weight or your looks?",
        yesValue: "I don't like how I look, I want to change",
        noValue: "I'm pretty happy with myself, flaws and all",
        answer: "There's only one you, and you're unique in your own way. Learn to love yourself, everyone is flawed, no one is perfect. But if you want a change, for example, you want to lose weight, figure out how to accomplish that.",
        image: <img src={selfLove} className="image" alt="Sleep"></img>,
    },
    {
        question: "Are you unhappy with yourself as a person? Are you not proud of yourself?",
        yesValue: "I feel like I'm a bad person, I suck",
        noValue: "I think I'm good, trying my best to improve",
        answer: "If there's something you can do to change or improve yourself, figure out how to do it and take small steps. However, don't be too hard on yourself and take a moment to think about what you have achieved so far, no matter how small or big.",
        image: <img src={headPlant} className="image" alt="Sleep"></img>,
    },
    {
        question: "Are you not treating yourself enough? Have you been denying yourself something?",
        yesValue: "I never/rarely treat myself to any enjoyment",
        noValue: "I treat myself, but don't over-indulge",
        answer: "Think about something that could improve your life or bring you joy. It doesn't have to be big, for example, a new coffee mug can brighten your day.",
        image: <img src={gift} className="image" alt="Sleep"></img>,
    },
    {
        question: "Are you in pain? Is one or multiple parts on your body hurting?",
        yesValue: "I'm in pain, and it's affecting my mood",
        noValue: "All is well, I'm fit as a fiddle",
        answer: "Depending on your injury, be sure to rest and recover. Take time off and have patience. Visit a medical professional if the pain doesn't go away by itself or with OTC meds. (If you have chronic pain, I'm sorry. Remember to be kind to yourself and rest.)",
        image: <img src={health} className="image" alt="Sleep"></img>,
    },
    {
        question: "Are you feeling lazy, bored or unmotivated? Lying around not doing anything?",
        yesValue: "I can't bring myself to do anything",
        noValue: "I got plans/I'm doing something I enjoy",
        answer: "Get up and start doing something you enjoy, chores or whatever. Even if you're not feeling motivated and it feels difficult to get up. After awhile you might get a flow, really get into what you're doing or having fun. Things rarely get better by doing nothing. Take action.",
        image: <img src={mentalHealth} className="image" alt="Sleep"></img>,
    },
    {
        question: "Do you dislike/hate your work? Do you only live for the weekends?",
        yesValue: "I can't stand my job!",
        noValue: "I'm content, I wouldn't want to change it",
        answer: "A new job or a career switch is in order. Take time figuring out what you want to do. Start saving up. Start looking for a new job. Take small steps to get somewhere. It can be scary, but sometimes you have to take a risk to make a change.",
        image: <img src={workPositive} className="image" alt="Sleep"></img>,
    },
    {
        question: "Are you unhappy with your relationship status?",
        yesValue: "I'm single and it sucks!/I'm in a bad relationship.",
        noValue: "I'm happy being single/I'm in a happy relationship.",
        answer: "If you're single, don't give up. Try to look for a partner in different places. Look out for red flags, but don't be too picky. If you're already in a relationship, and it's bad, try to figure out how to improve things. If you have an abusive partner who doesn't change, think about breaking up.",
        image: <img src={love} className="image" alt="Sleep"></img>,
    },
    {
        question: "Do you feel lonely? Do you feel like you don't have any friends?",
        yesValue: "I feel like I have no one I can trust or talk to",
        noValue: "I have friends/I'm an introvert, I enjoy my own company",
        answer: "Try to look for friends in new places or maybe you have someone in your life you can get to know better. Sometimes you can also have a feeling that you don't have friends, even though in reality you do. You just feel this way for no reason, even though you know it isn't true.",
        image: <img src={friends} className="image" alt="Sleep"></img>,
    },
    {
        question: "Are you feeling self-destructive? Are you feeling depressed or hopeless?",
        yesValue: "I feel like I can't take it anymore, tired of life.",
        noValue: "I'm feeling fine, content with life.",
        answer: "You're not alone. Many people feel like this at times. Write down your thoughts. Talk them out loud. Talk to someone you trust. If you've been having these feelings very long, consider seeing a therapist. Don't be afraid to ask for help. Don't give up.",
        image: <img src={depression} className="image" alt="Sleep"></img>,
    },

]