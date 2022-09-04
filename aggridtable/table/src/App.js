  import React from "react";
  import { LayoutofProjects }  from "./LeftMainLayout/LayoutofProjects";
  import { MainPanel } from "./LeftMainLayout/Mainpanel";
  import { Grid } from "@material-ui/core";


export const App = () => {
  return (
    <Grid>
    <Grid >
      <LayoutofProjects/>
    </Grid>
    <Grid >
    <MainPanel/>
  </Grid>
  </Grid>

  )
}

