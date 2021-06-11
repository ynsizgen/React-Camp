import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import { Route } from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";

//rfc
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>

          <Grid.Column width={12}>
            <Route exact path = "/" component={ProductList}/>
            <Route exact path = "/products" component={ProductList}/>
            <Route path = "/products/:name" component={ProductDetail}/>
            <Route path = "/cart" component={CartDetail}/>
          </Grid.Column>
        </GridRow>
      </Grid>
    </div>
  );
}
