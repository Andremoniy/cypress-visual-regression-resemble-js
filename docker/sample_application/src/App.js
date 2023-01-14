import "./App.css";
import * as React from "react";
import {styled} from "@mui/material/styles";
import {Grid, Paper, Typography} from "@mui/material";
import {useEffect, useState} from "react";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

function App() {
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        // document.fonts.load("400px 'Roboto'").then(() => setIsReady(true));
        document.fonts.ready.then(() => {
            document.fonts.load("400px 'Roboto'").then(() => setIsReady(true));
        });
    }, [])

    return (isReady &&
        <>
            <Typography variant="h1">Test title for visual regression</Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Item>
                        Shigeru Miyamoto (Hepburn: Miyamoto Shigeru, born November 16, 1952)
                        is a Japanese video game designer, producer and game director at
                        Nintendo, where he serves as one of its representative directors.
                        Widely regarded as one of the most accomplished and influential
                        designers in the history of video games, he is the creator of some
                        of the most acclaimed and best-selling game franchises of all time,
                        including Mario, The Legend of Zelda, Donkey Kong, Star Fox and
                        Pikmin. Born in Sonobe, Japan, Miyamoto graduated from Kanazawa
                        Municipal College of Industrial Arts. He originally sought a career
                        as a manga artist, until developing an interest in video games. With
                        the help of his father, he joined Nintendo in 1977 after impressing
                        then-president Hiroshi Yamauchi with his toys.[3] He helped create
                        art for the arcade game Sheriff,[4] and was later tasked with
                        designing a new arcade game, leading to the 1981 game Donkey Kong.
                        Miyamoto's platform game Super Mario Bros. (1985) and the
                        action-adventure game The Legend of Zelda (1986) helped the Nintendo
                        Entertainment System dominate the console game market. His games
                        have been flagships of every Nintendo video game console, from the
                        arcade machines of the late 1970s to the present day. He managed
                        Nintendo's Entertainment Analysis & Development software division,
                        which developed many Nintendo games, and he played an important role
                        in the creation of other influential games such as Pokémon Red and
                        Blue and Metroid Prime. Following the death of Nintendo president
                        Satoru Iwata in July 2015, Miyamoto became acting president
                        alongside Genyo Takeda until he was formally appointed "Creative
                        Fellow" a few months later.[5]
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        William Henry Gates III (born October 28, 1955) is an American
                        business magnate and philanthropist. He is a co-founder of
                        Microsoft, along with his late childhood friend Paul Allen.[2][3]
                        During his career at Microsoft, Gates held the positions of
                        chairman, chief executive officer (CEO), president and chief
                        software architect, while also being the largest individual
                        shareholder until May 2014.[4] He was a major entrepreneur of the
                        microcomputer revolution of the 1970s and 1980s. Gates was born and
                        raised in Seattle. In 1975, he and Allen founded Microsoft in
                        Albuquerque, New Mexico. It became the world's largest personal
                        computer software company.[5][a] Gates led the company as chairman
                        and CEO until stepping down as CEO in January 2000, succeeded by
                        Steve Ballmer, but he remained chairman of the board of directors
                        and became chief software architect.[8] During the late 1990s, he
                        was criticized for his business tactics, which have been considered
                        anti-competitive. This opinion has been upheld by numerous court
                        rulings.[9] In June 2008, Gates transitioned to a part-time role at
                        Microsoft and full-time work at the Bill & Melinda Gates Foundation,
                        the private charitable foundation he and his then-wife Melinda
                        established in 2000.[10] He stepped down as chairman of the board of
                        Microsoft in February 2014 and assumed a new post as technology
                        adviser to support the newly appointed CEO Satya Nadella.[11] In
                        March 2020, Gates left his board positions at Microsoft and
                        Berkshire Hathaway to focus on his philanthropic efforts on climate
                        change, global health and development, and education.[12] Since
                        1987, Gates has been included in the Forbes list of the world's
                        wealthiest people.[13][14] From 1995 to 2017, he held the Forbes
                        title of the richest person in the world every year except from 2010
                        to 2013.[15] In October 2017, he was surpassed by Amazon founder and
                        CEO Jeff Bezos, who had an estimated net worth of US$90.6 billion
                        compared to Gates's net worth of US$89.9 billion at the time.[16] As
                        of November 2022, Gates had an estimated net worth of US$107
                        billion, making him the fifth-richest person in the world.[17] Later
                        in his career and since leaving day-to-day operations at Microsoft
                        in 2008, Gates has pursued many business and philanthropic
                        endeavors. He is the founder and chairman of several companies,
                        including BEN, Cascade Investment, bgC3, and TerraPower. He has
                        given sizable amounts of money to various charitable organizations
                        and scientific research programs through the Bill & Melinda Gates
                        Foundation, reported to be the world's largest private charity.[18]
                        Through the foundation, he led an early 21st century vaccination
                        campaign that significantly contributed to the eradication of the
                        wild poliovirus in Africa.[19][20] In 2010, Gates and Warren Buffett
                        founded The Giving Pledge, whereby they and other billionaires
                        pledge to give at least half of their wealth to philanthropy.[21]
                    </Item>
                </Grid>
            </Grid>
        </>
    );
}

export default App;
