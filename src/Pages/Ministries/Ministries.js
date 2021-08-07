import React, {useState} from 'react';
import {useSelector} from "react-redux";

import Grid from "@material-ui/core/Grid";

import { Ministry, MinistryPage} from "../../Components";
import '../../Assets/CSS/Components/Overlay/Overlay.css'

import {createStyles, Dialog, DialogContent, DialogTitle, Typography} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";

// import profession from "../../Assets/Images/pastor001.jpg";
// import Marriage from "../../Assets/Images/Ministries/married/married.jpg";
// import outreach from "../../Assets/Images/Ministries/out-reach/outreach.jpg";
// import inReach from "../../Assets/Images/Ministries/in-reach/IMG_8770-1000x600.jpg";
// import women from "../../Assets/Images/Ministries/women/women.jpeg";
// import intersection from "../../Assets/Images/Ministries/Intercessory/Intercessory.jpeg";
// import men from "../../Assets/Images/Ministries/men/men.jpeg";
// import child from "../../Assets/Images/Ministries/chrildren/children2.jpeg";
// import youth from "../../Assets/Images/Ministries/youth/children.jpeg";

const profession = "https://gcc-store.s3.us-east-2.amazonaws.com/Images/pastor001.jpg";
const Marriage = "https://gcc-store.s3.us-east-2.amazonaws.com/Images/Ministries/married/married.jpg";
const outreach = "https://gcc-store.s3.us-east-2.amazonaws.com/Images/Ministries/out-reach/outreach.jpg";
const inReach = "https://gcc-store.s3.us-east-2.amazonaws.com/Images/Ministries/in-reach/IMG_8770-1000x600.jpg";
const women = "https://gcc-store.s3.us-east-2.amazonaws.com/Images/Ministries/women/women.jpeg";
const intersection = "https://gcc-store.s3.us-east-2.amazonaws.com/Images/Ministries/Intercessory/Intercessory.jpeg";
const men = "https://gcc-store.s3.us-east-2.amazonaws.com/Images/Ministries/men/men.jpeg";
const child = "https://gcc-store.s3.us-east-2.amazonaws.com/Images/Ministries/chrildren/children2.jpeg";
const youth = "https://gcc-store.s3.us-east-2.amazonaws.com/Images/Ministries/youth/children.jpeg";

const useStyles = makeStyles(() => createStyles({
    root: {
        display: "contents",
        padding: "0"
    },
    gridList: {
        height: "100%"
    },
    dialogWrapper: {
        padding: "20px 0",
        position: 'absolute',
        minWidth: "100%",
        margin: "0",
        display: "flex",
        alignItems: "center"
    },
    dialogTitle: {
        // padding: '0 50px',
        width: "98%",
        maxWidth: "98%"
    },
    noPadding: {
        padding: "0",
        maxWidth: "90%"
    }
}));

function Ministries() {
    const classes = useStyles();

    const [openPopup, setOpenPopup] = useState(false)
    const [title, setTitle] = useState("Ministry Title")

    const ministries = [
        {
            title: "Professionals Ministry",
            image: profession,
            content: {
                div: [
                    {
                        title: "Background:",
                        points: [
                            "This is one of the various Ministries at Glorious church of Christ (GCC). In our diverse professions like medical, Legal, Accounts, Engineer etc. we come together and advance the Kingdom of God.",
                            "Programs are managed by a committee of 12 professionals."
                        ]
                    },
                    {
                        title: "Vision:",
                        points: [
                            "To raise professionals who are advancing God’s Kingdom and interests at workplace, church and the Community.",
                        ]
                    },
                    {
                        title: "Mission:",
                        points: [
                            "Grooming professionals to maximize the God given potential, become reliable, self-sustaining and of resourceful character at workplace, church and in the Community."
                        ]
                    },
                    {
                        title: "Who is a professional?",
                        points: [
                            "A person carrying out God’s purpose, is knowledgeable/skilled, soul winner/disciple at work, church and community."
                        ]
                    },
                    {
                        title: "Objectives:",
                        points: [
                            "To acknowledge God as source of profession, use professions to enhance God’s kingdom.",
                            "To use Profession to bring out vision of GCC in church and community",
                            "To acquire knowledge and skills that enhancesexcellency for better service",
                            "To share experiences and network with professionals from other Christian communities.",
                        ]
                    },
                    {
                        title: "Professional activities",
                        points: [
                            "We organize and conduct, Fellowship, training, medical missions and support church development initiatives.",
                            "Professional’s fellowship held quarterly, where professionals pray, share experiences,and receive empowerment in various aspects of life.",
                            "Skills building: There is continuing Education/ training. All to increase professional’s motivation, team work, Socialization, mental and physical productivity.",
                            "Outreach activities: Visit various institutions like schools, prison and other communities that need support.",
                            "Organizing Medical missions for health care provision, HIV Counselling and testing, Dental care, Blood donation, care, treatment and support etc.",
                            "Facilitating in the annual professional’s Week at GCC where Professionals minister in different departments, they exhibit their products as well.",
                            "Organizing social events like the Annual Professional’s dinner. This happens in December.",
                            "Supporting church development initiatives like Radio program, redeeming the church boundaries etc.",
                        ]
                    },
                    {
                        title: "Professional Call:",
                        points: [
                            "All professionals in GCC requested to register with the head of professional’s department.",
                            "Believers experienced in addressing and empowering professionals are encouraged to approach church Administration.",
                            "Support (spiritual, financial, social or ideas) to enhance professional department is welcome.",
                        ]
                    },
                    {
                        title: "Please contact us on…..",
                        points: [
                            "Glorious Church of Christ Church Tel+ 256-782 325564/ 757 774218 Prepared By: Adelline Twimukye, (Head of professional’s Ministry Glorious Church of Christ)."
                        ]
                    },
                ],
            }
        },
        {
            title: "Married Ministry",
            image: Marriage,
            content: {
                div: [
                    {
                        title: "Introduction",
                        points: [
                            "Ephesians 5:22 & 25 Wives submit to your own husbands ,as to the Lord .For the husband is head of the wife ,as also Christ is head of the church: Husbands, love your wives just as Christ also loved the church and gave Himself for her,",
                            "God declared the end before the beginning. He established a Standard when He stated;. Let us make man in our image and likeness . As married couples living in a time when Gods standard has become distorted by the evil desires of man. We shall become the example, the reflection of Gods original intent. We shall be fruitful and multiply, we shall have dominion. And God will say, you are, my image.",
                        ]
                    },
                    {
                        title: "Mission Statement",
                        points: [
                            "The Soul purpose of the Marriage Ministry is to structure our relationships according to the Word of God. To develop the necessary knowledge, skills and abilities as Husband and Wife in God, to combat the adversary at all cost.",
                            "To analyze ourselves individually and collectively with the purpose of finding closure to past pain and experiences which have cause the relationships to be undernourished. Finally, we are going to invite the Holy Spirit into our hearts and liv es to take entire control of the institution of Marriage and family.",
                            "To respect, revive, restore and refresh each other on a daily basis. Not allowing the principalities and powers of darkness to take you off of your purpose and destiny with each other; understanding that the success of our future both in the home as well as the church rest on the strength and commitment of the Marriage.",
                        ]
                    },
                    {
                        title: "Vision Statement",
                        points: [
                            "To produce a culture of God filled Married Couples, who will rule and reign over all situations and circumstances that may come against them. To believe God for relationships which are going to translate into changing and charged congregational atmospheres, led by the Spirit of God when ever families come into the House of the Lord.",
                            "Teach married couples how to set goals and prepare a comprehensive plan which covers all aspects. These are spiritual development, health and wellness, finances, recreation and travels? These are essential elements to live a Spirit lead life that has nothing missing, nothing lacking and nothing broken.",
                        ]
                    },
                    {
                        title: "Goals and Objectives",
                        points: [
                            "Invite the Spirit of creativity into our marriage family to ensure that the interest of everyone is maintained.",
                            "Set an expectation to cultivate laughter and fun when appropriate.",
                            "Never cease in praying for the strength and peace of each others marriage.",
                            "Back to basics ,revisiting foundational principles of marriage.",
                            "Create a atmosphere of freedom to be transparent with one another .",
                            "To never miss a opportunity to restore, revive ,refresh each other.",
                            "God becoming the final authority in the marriage",
                        ]
                    },
                ],
            }
        },
        {
            title: "Out-Reach Ministry",
            image: outreach,
            content: {
                div: [
                    {
                        title: "Out-Reach Ministry",
                        points: ["The purpose of the Outreach ministry is to model Christ’s concern for people, both individually and collectively in communities. The reason we exists is to share the Gospel of Jesus Christ to everyone we meet through personal witnessing. Outreach ministries are called to deal with the needs and concerns of persons beyond the congregation, relating the ministry of the local church to the needs of the world through compassion, justice, and advocacy."]
                    },
                    {
                        title: "Our Objectives:",
                        points: [
                            "To analyze the local community to determine the breadth and scope of needs",
                            "To assess congregational strengths and abilities for outreach",
                            "To determine appropriate responses within the congregation’s abilities, strengths and interests",
                            "Compassion – involves addressing the immediate needs of individuals, families, and communities (food, clothing, emergency housing, employment, etc.)",
                            "Assistance – involves addressing changes in local communities related to welfare, long-term housing, education, community economic development, health services, etc",
                            "To offer encouragement and support for those participating in outreach ministries",
                            "To track the activities of the church through sponsored events, activities, and the actions of individuals",
                            "This ministry provides spiritual, educational, and social events and activities throughout the community that will promote Godly relationships. We want to provide a church family to those in our community and the surrounding areas who don’t know Jesus.",
                        ]
                    },
                    {
                        title: "Goal",
                        points: [
                            "Our goal is to loose the bands of wickedness, to undo the heavy burdens, and break every yoke. We will accomplish this through a number of different areas of outreach:",
                        ]
                    },
                ],
            }
        },
        {
            title: "In-reach Ministry",
            image: inReach,
            content: {
                div: [
                    {
                        title: "",
                        points: [
                            "The In-Reach Ministry is ministry that allows the People of the church to move forward in the spirit of excellence. This Ministry specializes in ministering to all People with an emphasis on all Genders. The purpose of this ministry is to build Godly individuals nurturing and grooming them into People of virtue.",
                            "The In-Reach ministry has a yearly conference and two mini conferences during the course of the year. Our In-Reach ministry is a powerful and highly anointed ministry lead by Pastor Leading the People into worship is an awesome experience and the challenge is always great.",
                            "We shall continue to strive to become People of excellence reaching higher heights in Christ daily as we together catch the vision of the house. This ministry was birthed in the spirit of our Pastor and we have not looked back for we realize that the best is yet to come.",
                            "Glorious Church JaJas Meeting",
                        ]
                    }
                ],
            }
        },
        {
            title: "Women Ministry",
            image: women,
            content: {
                div: [
                    {
                        title: "Women Activities",
                        points: [
                            "The Women’s Ministry is ministry that allows the women of the church to move forward in the spirit of excellence. This Ministry specializes in ministering to all women with an emphasis on teen girls. The purpose of this ministry is to build Godly women nurturing and grooming them into women of virtue.",
                            "The women’s ministry has a yearly conference and two mini conferences during the course of the year. Our women’s ministry is a powerful and highly anointed ministry lead by Pastor Leading the women into worship is an awesome experience and the challenge is always great.",
                            "We shall continue to strive to become women of excellence reaching higher heights in Christ daily as we together catch the vision of the house. This ministry was birthed in the spirit of our Pastor and we have not looked back for we realize that the best is yet to come.",
                        ]
                    }
                ],
            }
        },
        {
            title: "Intercessory",
            image: intersection,
            content: {
                div: [
                    {
                        title: "Mission",
                        points: [
                            "The mission of the intercessory Ministry is to work behind the scenes to edify and cover the entire Restoration Temple family through prayer; and to inspire and encourage the members, families and all church ministries to pursue a loving and deeper prayer life with God (2 Chronicles 7:14)"
                        ]
                    },
                    {
                        title: "Goals",
                        points: [
                            "Provide continuous prayer coverage for our Pastor, leadership, church body and ministries",
                            "Pray to see the vision of the church realized",
                            "Pray without ceasing to see the will of God accomplished in our church and the body of Christ and the nations",
                            "Encourage others to pray through example, mentoring and teaching so that the desire to pray turns into a lifestyle of prayer",
                            "Through prayer and intercession, see people set free and made whole so that they are able to take their place in ministry in the mighty army of God",
                            "To have 120 intercessors praying continually for the church, the nations and the body of Christ",
                        ]
                    },
                    {
                        title: "Activities",
                        points: [
                            "The activities of the intercessory ministry include:",
                            "Intercessory Prayer Meeting every Tuesday at 7pm",
                            "All Night Prayer the last Friday of every month",
                            "Prayer Camp",
                            "Prayer Breakfast",
                            "Prayer Conference",
                        ]
                    }
                ],
            }
        },
        {
            title: "Men Ministry",
            image: men,
            content: {
                div: [
                    {
                        title: "Purpose of men’s Ministry",
                        points: [
                            "Our Purpose is to define authentic manhood. In our society, being a man is confusing. There are a number of definitions according to the world’s standards. We will look at the Biblical call to be a real man as one who rejects passivity, accepts responsibility, leads courageously and invests in eternity."
                        ]
                    },
                    {
                        title: "The purpose of the Men’s Ministry at Glorious Church is expressed in Colossians 1:28",
                        points: [
                            "“That we may present every man complete in Christ.”",
                            "What does it mean to be complete in “Christ” as a man?,",
                            "To be complete in Christ means that we are happy in being a man! We provide for our families. We provide for our family, fight for righteousness sake, have close male friends that encourage us and are faithful to our wife (or keeping ourselves sexually pure before marriage).",
                            "In Proverbs 27:17 we are told, “As iron sharpens iron, so one man sharpens another.” Strong men build up other strong men.",
                            "The Men’s Ministry has been in place since the inception of the Church. It provides a forum for the Men to serve in the Body of Christ Positively.",
                        ]
                    },
                    {
                        title: "THE WORD POSITIVE STANDS FOR:",
                        points: [
                            "P – Prayerful (1 Thess. 5: 17)",
                            "O – Observant (Psalm 119: 34; Prov. 23:26)",
                            "S – Steadfast (1 Cor. 15:58)",
                            "I – Incorruptible (1 Cor. 15: 33)",
                            "T – Truthful (Psalm 51:6; Prov. 23:23)",
                            "I – Intuitive (James 1: 5)",
                            "V – Versatile (John 2:3, 5)",
                            "E – Expectant (Psalm 62:15)",
                        ]
                    },
                    {
                        title: "OUR AIMS AND OBJECTIVES:",
                        points: [
                            "Pursue and ensure spiritual growth among the Men",
                            "Become productive instruments in the Body of Christ (John 15:5)",
                            "Uphold and communicate sound Biblical principles in the raising of our children (Prov. 22:6)",
                            "Support and encourage one another in love (Prov. 27:17; Phil. 2:4)",
                            "Train up younger Men to become responsible Men in their homes",
                            "Bring sinners to the personal knowledge of our Lord Jesus Christ (Mat. 28: 19).",
                        ]
                    },
                    {
                        title: "OUR ACTIVITIES:",
                        points: [
                            "Testimonies and visitations.",
                            "Prayers",
                            "Bible quizzes",
                            "Bible discussions",
                            "Exhortations",
                            "Bible studies",
                        ]
                    },
                ],
            }
        },
        {
            title: "Children's Ministry",
            image: child,
            content: {
                div: [
                    {
                        title: "About Children ministry",
                        points: [
                            "Children’s Ministry is led by a team of staff and volunteers whose passion is children and whose vision is to “Connect Kids to God and to Others”!",
                            "Our goal is to provide a fun and interactive program tailored just for kids no matter what age and grade to help them know Jesus and grow spiritually as they build meaningful relationships with other children and adults!",
                            "Our weekend services are designed with children in mind! Each child is taught in an age-appropriate environment. From Nursery to secondary our desire is to see each child be cared for in an individual way.",
                            "Each of our Glorious Kids leaders has been through an extensive orientation process and has been screened to work with your child. From loving care in the nursery to radical music in “The Edge,” your child will be cared for and taught God’s Word in a safe, loving and encouraging environment.",
                        ]
                    }
                ],
            }
        },
        {
            title: "Youth Ministry",
            image: youth,
            content: {
                div: [
                    {
                        title: "Youth Ministry Objectives",
                        points: [
                            "To prepare youth for a lifelong walk with Christ",
                            "To help youth become aware of God as revealed in Jesus Christ, to respond to Christ in a personal commitment of faith, and to follow God’s will in the full meaning of church membership and Christian discipleship. This involves such things as new convert classes, mentoring by older Christians, and involvement of youth in church committees.",
                            "To guide youth to witness about their personal faith in Jesus Christ and to invite others to respond to Him. This can be done through evangelism training, contacts, inviting youth to visit w/ you, etc.",
                            "To help youth develop a meaningful and devotional prayer life. This can be encouraged through providing quiet time materials, accountability, journals, modeling/example, letting youth know how important it is for you, asking them for prayer requests and following through with them, telling them about your answered prayers and telling them things you learned in your personal prayer time.",
                            "To help youth experience worship in private and corporate settings. This can be done by letting youth help plan a worship service, having a youth time in the worship service, allowing a youth position on the worship committee, and having a retreat on worship.",
                            "To guide youth to participate in Christian missions and help them develop the skills these ministries require. Possible activities include establishing a “Food Bank,” special projects, Bible studies, a spiritual gift inventory, a youth swap with another church, back-yard Bible Studies, vacation Bible school, etc.",
                            "To help youth increase their knowledge and understanding of Bible truths and to apply these truths in every area and relationship of life. This involves discipleship, allowing youth to teach children, being a role model, etc.",
                            "To help youth grow in understanding and acceptance of self by affirmation, Biblical concepts of self-image, giving them positions of leadership suitable to their gifts, mission/ service projects, affirmation activities, etc.",
                            "To help youth understand and commit themselves to a Christian perspective of morality through seminars, role-playing, skits, fashion shows on proper dress, parent workshops, guest speakers, a commitment to purity service, role-modeling relationships, etc.",
                            "To guide youth to explore their abilities and talents and develop a Christian prespective on choosing a vocation. Helpful possibilities include talent shows, Seminar’s on taking aptitude tests, giving them leadership positions, having businessmen talk to youth, having a youth career day with representatives from different vocations in the church",
                            "To guide youth in the stewardship of their money, time, and abilities. Use your personal example, a simulation game (ex. give each 1$ then make them keep track of what they spent that dollar on during the week), help run a soup kitchen, case studies, setting goals, making a budget, personal testimonies, seminars",
                            "To help youth develop a theology and rationale for being Christian in a world of religious pluralism. This involves parental education on cults, seminars on cults, studies on basic beliefs, scripture knowledge, visiting a service of another religion and then having a debrief time, etc.",
                            "To guide youth to adopt a life-style of Christian response to a world of limited resources and inequitable distribution of resources and power. Possibilities include defining Biblical success, sponsoring needy kids, having an offering for world hunger.",
                            "To guide youth to develop good habits in constructive use of their pleasure time.",
                            "To do this we need to hold them accountable for their time, teach them balance and priorities, and teach them about morality.",
                            "To enlist and equip adult leaders who will work effectively toward the objectives for youth ministry.",
                        ]
                    }
                ],
            }
        },
    ]

    const [scroll, setScroll] = useState(<></>)
    useSelector(state => state.Events);

    /* Open when someone clicks on the span element */
    const openNav = (newContent) => {
        console.log(newContent)
        setTitle(newContent.title)
        setScroll(<MinistryPage content={newContent}/>)
        setOpenPopup(true)

    }

    return (
        <div>
            <Grid container direction="column">
                <Grid item>
                    <Typography color="primary" variant="h4" style={{textAlign: "center", padding: 5}}>Glorious church Ministries</Typography>
                </Grid>
                <Grid item spacing={3} container>
                    {ministries.map((ministry, index) => (
                        <Grid key={index} item xs={12} sm={6} md={5} lg={4} container justifyContent="center">
                            <Ministry id={index} content={ministry} view={openNav}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Dialog open={openPopup} maxWidth="md" classes={{paper: classes.dialogWrapper}}>
                <DialogTitle className={classes.dialogTitle}>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h6" component="div" style={{flexGrow: 1}}>{title}</Typography>
                        </Grid>
                        <Grid item>
                            <IconButton style={{width: "30px", minWidth: "30px", height: "30px"}} color="secondary" onClick={() => {setOpenPopup(false)}}><Close/></IconButton>
                        </Grid>
                      </Grid>
                </DialogTitle>
                <DialogContent dividers className={classes.noPadding}>
                    <div>
                        {scroll}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Ministries;
