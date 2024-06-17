<template>
  <div>
    <Carousel />
    <ActionFilm />
    <AnimelFilm />
    <Plus18Film />
    <SeriesFilm />
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import ActionFilm from "@/components/ActionFilm";
import AnimelFilm from "@/components/AnimelFilm";
import Plus18Film from "@/components/Plus18Film";
import SeriesFilm from "@/components/SeriesFilm";

export default {
  name: "IndexPage",
  components: {
    Carousel,
    ActionFilm,
    AnimelFilm,
    Plus18Film,
    SeriesFilm,
  },
};
</script>
