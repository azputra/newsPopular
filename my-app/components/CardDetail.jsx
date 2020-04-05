import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

function Technology(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={props.news.urlToImage}
                    title={props.news.source.name}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ maxHeight: "8vh", minHeight: "8vh" }}>
                        {props.news.title}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    {
                        props.news.author ?
                            <CardHeader
                                avatar={
                                    < Avatar aria-label="recipe" className={classes.avatar}>
                                        {props.news.author[0]}
                                    </Avatar>
                                }
                                title={props.news.author}
                                subheader={props.news.publishedAt.split("T")[0]}
                            />
                            :
                            <CardHeader
                                avatar={
                                    < Avatar aria-label="recipe" className={classes.avatar}>
                                        N
                                    </Avatar>
                                }
                                title="No Name"
                                subheader={props.news.publishedAt.split("T")[0]}
                            />
                    }
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Description:</Typography>
                        <Typography paragraph>
                            {props.news.description}
                        </Typography>
                        <Typography paragraph>
                            {props.news.content}
                        </Typography>
                        <Typography>
                            <Link href={props.news.url}>
                                <a>sumber</a>
                            </Link>
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
            <style jsx>{`
                body {
                margin: 0;
                }
                h3{
                    cursor:pointer
                }
                .container{
                    margin-top:10vh;
                    padding-right: 15px;
                    padding-left: 15px;
                    margin-right: auto;
                    margin-left: auto;
                }
                .row{
                    justify-content: space-around;
                    margin: 5px;
                    display: flex;
                }
                .col{
                    position: relative;
                    min-height: 1px;
                    padding-right: 15px;
                    padding-left: 15px;
                }
                .titleNews{
                    max-height:7vh;
                    max-width:35vh;
                    min-height:7vh;
                    min-width:35vh;
                }
            `}</style>
        </>
    )
}

export default Technology