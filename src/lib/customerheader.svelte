<style>

.customer-header-container {
    margin-top: 150px;
    margin-left: 100px;
    margin-right: 100px;
}

.customer-logo {
    width: 200px;
    height: auto;
}

.customer-header-h1 {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 52px;
    max-width: 700px;
}

.customer-header-description {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 27px;
    line-height: 200%;
    max-width: 600px;
    color: #555555;
    margin-top: 0px;
    margin-bottom: 0px;
}

.customer-header-subcontainer {
    display: flex;
    justify-content: center;
    align-items: center;
}

.customer-header-column-left {
    width: 60%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.customer-header-column-right {
    width: 40%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.customer-header-column-left-subcolumn {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
}

.customer-header-column-left-metrics {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-top: 50px;
    column-gap: 10px;
}

.customer-image {
    border-style: solid;
    border-color: black;
    border-width: 4px;
    height: 575px;
    width: 575px;
}

.metric-description {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 22px;
    line-height: 150%;
    text-align: center;
    color: #555555;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.metric-header {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    font-size: 46px;
    text-align: center;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}


@media (max-width: 1575px) {
    .customer-logo {
        width: 180px;
    }
    
    .customer-image {
        height: 400px;
        width: 400px;
    }

    .customer-header-h1 {
        font-size: 50px;
        margin-bottom: 15px;
    }

    .customer-header-description {
        font-size: 25px;
    }

    .customer-header-column-left-metrics {
        margin-top: 20px;
    }

    .metric-header {
        font-size: 38px;
    }

    .metric-description {
        font-size: 18px;
    }

    .customer-header-container {
        margin-left: 80px;
        margin-right: 0px;
    }
}

@media (max-width: 1215px) {

    .customer-header-column-left-subcolumn {
        margin-left: 60px;
    }

    .customer-logo {
        width: 150px;
    }



    .customer-header-container {
        margin-left: 50px;
        margin-right: 50px;
    }

    .customer-header-column-left {
        width: 100%;
    }

    .customer-header-column-right {
        width: 100%;
        margin-top: 50px;
    }
    
    .customer-image {
        height: 300px;
        width: 300px;
    }

    .customer-header-description {
        font-size: 25px;
    }

    .customer-header-column-left-metrics {
        margin-top: 20px;
    }

    .metric-header {
        font-size: 38px;
    }

    .metric-description {
        font-size: 18px;
    }

    .customer-header-subcontainer { 
        flex-direction: column;
    }
}

@media (max-width: 770px) {
    .customer-header-description {
        text-align: center;
    }

    .customer-header-column-left-subcolumn {
        align-items: center;
        margin-left: 0px;
    }
    .customer-header-h1 {
        font-size: 45px;
        text-align: center;
    }

    .metric-header {
        font-size: 35px;
    }

    .metric-description {
        font-size: 16px;
    }

    .customer-header-container {
        margin-left: 20px;
        margin-right: 20px;
    }

    .customer-header-column-left-metrics {
        column-gap: 5px;
    }
}

@media (max-width: 520px) {
    .customer-header-h1 {
        font-size: 35px;
    }

    .customer-header-container {
        margin-left: 10px;
        margin-right: 10px;
    }

    .customer-header-description {
        font-size: 18px;
        text-align: center;
        margin-top: 20px;
    }

    .customer-header-column-left-metrics {
        display: none;
    }

    .customer-image {
        height: 200px;
        width: 200px;
    }
}
</style>

<script>
    export let customer_logo;
    export let customer_logo_description;
    export let customer_title;
    export let customer_description;
    export let metric_column_1_metric;
    export let metric_column_2_metric;
    export let metric_column_3_metric;
    export let metric_column_1_description;
    export let metric_column_2_description;
    export let metric_column_3_description;
    export let customer_image;
    export let customer_image_description;
</script>

<div class="customer-header-container">
    <img src={customer_logo} alt="{customer_logo_description}" class="customer-logo">
    <div class="customer-header-subcontainer">
        <div class="customer-header-column-left">
            <div class="customer-header-column-left-subcolumn">
                <h1 class="customer-header-h1">{customer_title}</h1>
                <p class="customer-header-description">{customer_description}</p>
            </div>


            <div class="customer-header-column-left-metrics">
                <h2 class="metric-header">{metric_column_1_metric}</h2>
                <h2 class="metric-header">{metric_column_2_metric}</h2>
                <h2 class="metric-header">{metric_column_3_metric}</h2>
                <p class="metric-description">{metric_column_1_description}</p>
                <p class="metric-description">{metric_column_2_description}</p>  
                <p class="metric-description">{metric_column_3_description}</p>
            </div>
        </div>
        <div class="customer-header-column-right">
            <img src={customer_image} alt="{customer_image_description}" class="customer-image">
        </div>
    </div>
</div>