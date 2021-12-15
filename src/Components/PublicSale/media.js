import { StyleSheet, css } from "aphrodite";
export const styles = StyleSheet.create({
  heading: {
    fontStyle: "normal",
    fontWeight: "bolder",
    fontSize: "79px",
    lineHeight: "118px",
    textAlign: "center",
    color: "#7879f1",
    fontFamily: "Franklin Gothic",
    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media (max-width: 767px)": {
      fontStyle: "normal",
      fontWeight: "bolder",
      fontSize: "24px",
      lineHeight: "18px",
      textAlign: "center",
      color: "#7879f1",
      fontFamily: "Franklin Gothic",
    },
  },
  heading2: {
    fontStyle: "normal",
    fontWeight: "bolder",
    fontSize: "28px",
    lineHeight: "27px",
    textAlign: "left",
    color: "#7879f1",
    fontFamily: "Franklin Gothic",
    color: "white",
    "@media (max-width: 567px)": {
      textAlign: "left",
    },
    "@media only screen and (max-width: 767px)": {
      fontStyle: "normal",
      fontWeight: "bolder",
      fontSize: "12px",
      lineHeight: "13px",
      textAlign: "center",
      color: "white",
      fontFamily: "Franklin Gothic",
    },
  },
  image_private: {
    maxWidth: "600px",
    width: "100%",
    paddingTop: "40px",
    paddingBottom: "80px",
    paddingRight: "0px",
    paddingLeft: "0px",
    "@media (max-width: 567px)": {
      textAlign: "center",
      float: "center",
      width: "100%",
    },
    "@media only screen and (max-width: 767px)": {
      width: "60%",
      textAlign: "center",
    },
    "@media only screen and (max-width: 1024px)": {
      width: "50%",
      textAlign: "center",
    },
  },
  image: {
    width: "50%",
    paddingRight: "40px",
    "@media only screen and (max-width: 1023px)": {
      width: "20%",
      textAlign: "center",
    },
    "@media (max-width: 567px)": {
      textAlign: "center",
      float: "center",
      width: "100%",
    },
  
  },
  button_group: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "20px",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      display: "flex",
      width: "60%",
      marginTop: "10px",

      textAlign: "center",
    },
  },
  display: {
    display: "flex",

    alignItems:"center",
    flexDirection: "column",
    textAlign: "left",
    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      width: "60%",
      alignItems: "center",
      textAlign: "center",
    },
  },
  displayRight: {
    display: "flex",
    padding:"0 72px ",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    color: "white",
    textAlign: "left",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      flexDirection: "column-reverse",
      textAlign: "center",
      width: "100%",

      textAlign: "center",
    },
  },
  button_group2: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    marginTop: "80px",
    margin: "20px",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      width: "60%",

      textAlign: "center",
    },
  },
  section_each: {
    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {},
  },
  image_mid: {
    width: "20%",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      width: "50%",
    },
  },
  image_Logo: {
    width: "170px",
    margin: "10px",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      width: "40%",
    },
  },
  image_Logo2: {
    width: "170px",
    marginTop: "30px",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      width: "80%",
    },
  },
  displayCard: {
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
    marginTop: "10px",
    color: "white",

    "@media (max-width: 567px)": {
      textAlign: "center",
      margin: "0px",
    },
    "@media only screen and (max-width: 767px)": {
      flexDirection: "column-reverse",
      justifyContent: "space-evenly",
      textAlign: "center",
      width: "100%",

      textAlign: "center",
    },
  },
  text: {
    backgroundColor: "black",
    alignItems: "center",
    padding: "0 72px",

    color: "white",

    "@media only screen and (max-width: 767px)": {
      padding: "0 52px",
      flexDirection: "column-reverse",
      justifyContent: "space-evenly",
      textAlign: "center",
      width: "100%",

      textAlign: "center",
    },
    "@media (max-width: 554px)": {
      textAlign: "center",
      padding: "0 10px",
    },
  },
});
