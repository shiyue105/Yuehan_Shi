/**
 * Publication dataset — Yuehan Shi
 * Source of truth: owner's CV (verified facts only).
 * Language-independent metadata; status labels are translated in I18N (data.js).
 *
 * IMPORTANT: No DOI / arXiv / paper URLs are provided because none are
 * publicly verifiable yet. Do not add links without owner confirmation.
 */

(function () {
  "use strict";

  var PUBS = {
    data: [
      /* =========================================================
         Accepted (2)
         ========================================================= */

      {
        id: "acml2026-ucdpa",
        year: 2026,
        title: "UCDPA: Uncertainty-Calibrated Dual-Path Test-Time Adaptation",
        authors: "Y. Shi, Z. Ye, Y. Yu, G. Gupta, G. Tong",
        venue: {
          full: "Asian Conference on Machine Learning (ACML 2026)",
          short: "ACML 2026",
          location: null,
        },
        rank: "ccf-c",
        status: "accepted",
        links: { paper: null, doi: null, arxiv: null, code: null },
        topics: ["test-time adaptation", "uncertainty calibration", "vision transformers"],
      },

      {
        id: "prcv2026-adaps-come",
        year: 2026,
        title: "AdaPS-COME: Adaptive Prediction-Set Reliability for Safe Test-Time Adaptation of Vision Transformers",
        authors: "Y. Shi, S. Zhou, Y. Yu, Z. Ye, J. Xuan, G. Tong",
        venue: {
          full: "Chinese Conference on Pattern Recognition and Computer Vision (PRCV 2026)",
          short: "PRCV 2026",
          location: null,
        },
        rank: "ccf-c",
        status: "accepted",
        links: { paper: null, doi: null, arxiv: null, code: null },
        topics: ["test-time adaptation", "conformal prediction", "vision transformers", "reliability"],
      },

      /* =========================================================
         Under Review (1)
         ========================================================= */

      {
        id: "olar2026-sea-level",
        year: 2026,
        title: "Enhancing Regional Sea-Level Prediction Using TimeGAN-Augmented ConvLSTM, ConvGRU, and Mamba Models with Explainability",
        authors: "G. Tong, Z. Zhong, Y. Shi, J. Rong, J. Chao, et al.",
        venue: {
          full: "Ocean-Land-Atmosphere Research (OLAR)",
          short: "Ocean-Land-Atmosphere Research",
          location: null,
        },
        rank: null,
        status: "under-review",
        links: { paper: null, doi: null, arxiv: null, code: null },
        topics: ["time-series forecasting", "spatiotemporal learning", "TimeGAN", "explainability"],
      },

      /* =========================================================
         Manuscript in Preparation (1)
         ========================================================= */

      {
        id: "rc-ttd-manuscript",
        year: 2026,
        title: "RC-TTD: Risk-Calibrated Test-Time Decisions for Reliable Retrieval-Augmented Generation",
        authors: "Y. Shi, Z. Ye, Y. Yu, G. Gupta",
        venue: {
          full: "Manuscript in Preparation",
          short: "Manuscript",
          location: null,
        },
        rank: null,
        status: "in-preparation",
        links: { paper: null, doi: null, arxiv: null, code: null },
        topics: ["retrieval-augmented generation", "reliability", "conformal prediction", "decision-making"],
      },
    ],

    /* All publications are shown on the homepage (small dataset). */
    featuredIds: [
      "acml2026-ucdpa",
      "prcv2026-adaps-come",
      "olar2026-sea-level",
      "rc-ttd-manuscript",
    ],
  };

  window.PUBS = PUBS;
})();
