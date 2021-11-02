// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0

import MediaTypes from '../../../shared/media/mediaTypes.js';
import BaseCategorySlideComponent from '../base/baseCategorySlideComponent.js';

export default class PhotoCategorySlideComponent extends BaseCategorySlideComponent {
  constructor() {
    super(MediaTypes.Photo, {
      objectFit: 'cover',
    });
  }
}