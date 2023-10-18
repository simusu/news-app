<template>
    <div :class="className">
    <AppAlert>Latest News</AppAlert>
        <Grid :modifiers="['align-center', 'row-space-12']">
        <GridItem :modifiers="['displaycolumn']">
            <h5>Tesla, Netflix Grab Earnings Spotlight This Week As Analysts Divided On Q3 Reporting Season: What's On Investors' Radar?</h5>
            <p>The third-quarter reporting season starts in earnest this week, with some high-profile names from the financial and tech spaces in the earnings mix. Mixed Expectations: S&P 500 earnings will likely increase for the first time in a year, according to FactSet.</p>
        </GridItem>
        <GridItem :modifiers="['displaycolumn']">
            <h5>Amazons Puzzling Job Listing, Jamie Raskin Slamming Marjorie Taylor Greene Amid Speakership Crisis And A Chance To Win A Free Tesla Model Y: Top Stories </h5>
            <p>The past weekend brought an interesting mix of stories. From an unusual job posting by Amazon.com, Inc. AMZN that sparked speculations to fierce political debates involving former President Donald Trump. Meanwhile, Tesla Inc. TSLA offered a tempting deal.</p>
        </GridItem>
        <GridItem :modifiers="['displaycolumn']">
            <h5>Tesla, Netflix Grab Earnings Spotlight This Week As Analysts Divided On Q3 Reporting Season: What's On Investors' Radar?</h5>
            <p>The third-quarter reporting season starts in earnest this week, with some high-profile names from the financial and tech spaces in the earnings mix. Mixed Expectations: S&P 500 earnings will likely increase for the first time in a year, according to FactSet.</p>
        </GridItem>
     </Grid>
</div>
</template>

<script>
export default {
    data() {
        return {
            className: 'news',
        };
    },
};
</script>
<style lang="scss">
.news {
    width: 700px;
    padding: 50px 30px;
    margin: 0 auto;
    background-color : $color-secondary-yelow;
}
</style>