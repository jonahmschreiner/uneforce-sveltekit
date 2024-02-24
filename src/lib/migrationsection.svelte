<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

.migration-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 200px;
}

.migration-column {
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 50%;
    padding-left: 200px;
}

.migration-image {
    height: 500px;
    width: auto;
}

.migration-image-container {
    width: 50%;
    display: flex;
    justify-content: center;
}

.migration-header {
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    margin-top: 0px;
    margin-bottom: 80px;
    text-align: left;
    max-width: 90%;
    color: #000000;
    margin-right: 0px;
    margin-left: 0px;
    font-size: 64px;
}

.migration-description {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 27px;
    text-align: left;
    color: #555555;
    max-width: 80%;
    line-height: 200%;
    margin-bottom: 50px;
    margin-top: 0px;
}

.button-demo-migration {
    background-color: #FFFFFF;
    color: #000000;
    border: solid;
    border-color: #000000;
    border-width: 4px;
    width: 240px;
    height: 60px;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 18px;
    margin-right: 20px;
    margin-bottom: 20px;
}

.button-demo-migration:hover {
    background-color: #000000;
    color: #FFFFFF;
}

@media (max-width: 1640px) {

}

@media (max-width: 1575px) {
    .migration-header {
        font-size: 52px;
    }

    .migration-description {
        font-size: 25px;
    }
}

@media (max-width: 1385px) {
    .migration-header {
        font-size: 48px;
        margin-bottom: 50px;
    }

    .migration-description {
        font-size: 23px;
        max-width: 82%;
    }

    .migration-image {
        height: 400px;
        width: auto;
    }
}

@media (max-width: 1215px) {
    
    .migration-container {
        flex-direction: column-reverse;
        margin-top: 120px;
    }

    .migration-column {
        padding-left: 0px;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .migration-image-container {
        width: 100%;
    }

    .migration-header {
        font-size: 48px;
        margin-top: 100px;
        text-align: center;
        max-width: 60%;
    }

    .migration-description {
        text-align: center;
    }

    .button-demo-migration {
        margin-right: 0px;
    }

    .migration-container {
        margin-bottom: 100px;
    }
}

@media (max-width: 770px) {
    .migration-header {
        font-size: 40px;
        max-width: 75%;
    }

    .migration-description {
        font-size: 21px;
        max-width: 75%;
    }

    .migration-image {
        height: 300px;
        width: auto;
    }
}

@media (max-width: 520px) {
    .migration-header {
        font-size: 26px;
        max-width: 90%;
        margin-top: 80px;
    }

    .migration-description {
        font-size: 19px;
        max-width: 80%;
    }

    .migration-image {
        height: 250px;
        width: auto;
    }

    .migration-container {
        margin-top: 80px;
    }
}

button {
    cursor: pointer;
    padding: 0;
    background: none;
    border: none;
}
</style>

<script>
    import { goto } from '$app/navigation';
    export let migration_title;
    export let migration_description;
</script>

<div class="migration-container">
    <div class="migration-column">
        <h1 class="migration-header">{migration_title}</h1>
        <p class="migration-description">{migration_description}</p>
        <button on:click={goto("/demo")} class="button-demo-migration">Migrate now</button>
    </div>
    <div class="migration-image-container">
        <img src="migrationGraphic.png" alt="Data sheets graphic symbolizing data migration." class="migration-image">
    </div>
</div>