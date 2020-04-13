export default {
  data() {
    return {
      timelines: [],
    };
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkAnimations);
  },
  beforeMount() {
    this.$nextTick(() => {
      this.createTimelines();
    });
  },
  mounted() {
    this.$nextTick(() => {
      this.checkAnimations();
      window.addEventListener('scroll', this.checkAnimations);
    });
  },
  methods: {
    checkAnimations() {
      const top = document.body.scrollTop || document.documentElement.scrollTop;

      if (this.timelines) {
        this.timelines.forEach(timeline => {
          if (top + window.innerHeight * 0.6 >= timeline.ref.offsetTop) {
            timeline.tl.play();
          }
        });
      }
    },
  },
};
