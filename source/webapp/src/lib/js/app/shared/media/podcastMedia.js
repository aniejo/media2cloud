// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0

import BaseMedia from './baseMedia.js';

const DEFAULT_IMAGE = './images/podcast.png';

export default class PodcastMedia extends BaseMedia {
  get defaultImage() {
    return DEFAULT_IMAGE;
  }
}