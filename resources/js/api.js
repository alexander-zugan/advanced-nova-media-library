export default {
  async update(mediaItemId, mediaItem) {
    return Nova.request().post(
      `/nova-vendor/ebess/advanced-nova-media-library/update-item/${mediaItemId}`,
      mediaItem
    );
  },
};
