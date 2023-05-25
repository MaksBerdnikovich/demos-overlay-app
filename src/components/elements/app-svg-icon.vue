<script setup>
import logo from '@/assets/svg/logo.svg';
import starOutline from '@/assets/svg/star-outline.svg';
import star from '@/assets/svg/star.svg';
import presentation from '@/assets/svg/presentation.svg';
import magnify from '@/assets/svg/magnify.svg';
import filter from '@/assets/svg/filter.svg';

import spreadsheet2 from '@/assets/svg/spreadsheet2.svg';
import topDocking from '@/assets/svg/top-docking.svg';
import design from '@/assets/svg/design.svg';
import leftDocking from '@/assets/svg/left-docking.svg';
import onepager from '@/assets/svg/scroll.svg';
import fullPageView from '@/assets/svg/full-page-view.svg';
import staticViewLevel2 from '@/assets/svg/static-view-level2.svg';
import term from '@/assets/svg/term.svg';
import moreDetails from '@/assets/svg/more-details.svg';
import aperture from '@/assets/svg/aperture.svg';
import showingVideoFrames from '@/assets/svg/showing-video-frames.svg';
import comet from '@/assets/svg/comet.svg';
import textBox from '@/assets/svg/text-box.svg';
import bursts from '@/assets/svg/bursts.svg';
import elementor from '@/assets/svg/elementor.svg';
import wpb from '@/assets/svg/wpb.svg';
import cursor from '@/assets/svg/cursor.svg';
import shape from '@/assets/svg/shape.svg';
import slider from '@/assets/svg/slider.svg';
import graduationCap from '@/assets/svg/graduation-cap.svg';
import lifebuoy from '@/assets/svg/lifebuoy.svg';
import disconnected from '@/assets/svg/disconnected.svg';
import smartphoneTablet from '@/assets/svg/smartphone-tablet.svg';
import severity from '@/assets/svg/severity.svg';
import fastСart from '@/assets/svg/fast-cart.svg';
import searchMore from '@/assets/svg/search-more.svg';
import globeEarth from '@/assets/svg/globe-earth.svg';
import protect from '@/assets/svg/protect.svg';

import computerSupport from '@/assets/svg/computer-support.svg';
import lowercase from '@/assets/svg/lowercase.svg';
import menuRounded from '@/assets/svg/menu-rounded.svg';
import todoList from '@/assets/svg/todo-list.svg';
import salesPerformance from '@/assets/svg/sales-performance.svg';
import extraFeatures from '@/assets/svg/extra-features.svg';
import playButton from '@/assets/svg/play-button.svg';
import touchpad from '@/assets/svg/touchpad.svg';
import securedLetter from '@/assets/svg/secured-letter.svg';
import placeMarker from '@/assets/svg/place-marker.svg';
import jewel from '@/assets/svg/jewel.svg';
import ocr from '@/assets/svg/ocr.svg';
import pollHorizontal from '@/assets/svg/poll-horizontal.svg';
import fullImage from '@/assets/svg/full-image.svg';
import testAccount from '@/assets/svg/test-account.svg';
import clock from '@/assets/svg/clock.svg';
import movieTicket from '@/assets/svg/movie-ticket.svg';
import pieChart from '@/assets/svg/pie-chart.svg';
import userShield from '@/assets/svg/user-shield.svg';
import people from '@/assets/svg/people.svg';
import getQuote from '@/assets/svg/get-quote.svg';
import tags from '@/assets/svg/tags.svg';
import spreadsheet from '@/assets/svg/spreadsheet.svg';
import viewCarousel from '@/assets/svg/view-carousel.svg';
import filingCabinet from '@/assets/svg/filing-cabinet.svg';
import conversion from '@/assets/svg/conversion.svg';
import getDiscount from '@/assets/svg/get-a-discount.svg';
import chamfer from '@/assets/svg/chamfer.svg';
import menubar from '@/assets/svg/menubar.svg';
import clickСollect from '@/assets/svg/click-&-collect.svg';
import advertisement from '@/assets/svg/advertisement.svg';

</script>

<template>
    <component :is="icons[name].component"></component>
    <!--
    <svg :class="className" xmlns="http://www.w3.org/2000/svg">
      <title v-if="title">{{ title }}</title>
      <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink"/>
    </svg>
    -->
</template>

<script>

const icons = {
    'logo': {component: logo},
    'starOutline': {component: starOutline},
    'star': {component: star},
    'presentation': {component: presentation},
    'magnify': {component: magnify},
    'filter': {component: filter},
    
    'spreadsheet2': {component: spreadsheet2},
    'topDocking': {component: topDocking},
    'design': {component: design},
    'leftDocking': {component: leftDocking},
    'onepager': {component: onepager},
    'fullPageView': {component: fullPageView},
    'staticViewLevel2': {component: staticViewLevel2},
    'term': {component: term},
    'moreDetails': {component: moreDetails},
    'aperture': {component: aperture},
    'showingVideoFrames': {component: showingVideoFrames},
    'comet': {component: comet},
    'textBox': {component: textBox},
    'bursts': {component: bursts},
    'elementor': {component: elementor},
    'wpb': {component: wpb},
    'cursor': {component: cursor},
    'shape': {component: shape},
    'slider': {component: slider},
    'graduationCap': {component: graduationCap},
    'lifebuoy': {component: lifebuoy},
    'disconnected': {component: disconnected},
    'smartphoneTablet': {component: smartphoneTablet},
    'severity': {component: severity},
    'fastСart': {component: fastСart},
    'searchMore': {component: searchMore},
    'globeEarth': {component: globeEarth},
    'protect': {component: protect},
    
    'computerSupport': {component: computerSupport},
    'lowercase': {component: lowercase},
    'menuRounded': {component: menuRounded},
    'todoList': {component: todoList},
    'salesPerformance': {component: salesPerformance},
    'extraFeatures': {component: extraFeatures},
    'playButton': {component: playButton},
    'touchpad': {component: touchpad},
    'securedLetter': {component: securedLetter},
    'placeMarker': {component: placeMarker},
    'jewel': {component: jewel},
    'ocr': {component: ocr},
    'pollHorizontal': {component: pollHorizontal},
    'fullImage': {component: fullImage},
    'testAccount': {component: testAccount},
    'clock': {component: clock},
    'movieTicket': {component: movieTicket},
    'pieChart': {component: pieChart},
    'userShield': {component: userShield},
    'people': {component: people},
    'getQuote': {component: getQuote},
    'tags': {component: tags},
    'spreadsheet': {component: spreadsheet},
    'viewCarousel': {component: viewCarousel},
    'filingCabinet': {component: filingCabinet},
    'conversion': {component: conversion},
    'getDiscount': {component: getDiscount},
    'chamfer': {component: chamfer},
    'menubar': {component: menubar},
    'clickСollect': {component: clickСollect},
    'advertisement': {component: advertisement},
}

export default {
    name: "app-svg-icon",
    props: {
        name: {
            type: String,
            required: true
        },
    },
    
    computed: {
        /*
        iconPath() {
          let icon = import(`@/assets/svg/${this.name}.svg?url`);
          if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
            icon = icon.default;
          }
    
          return icon.url;
        },
    
        className() {
          return 'svg-icon svg-icon--' + this.name;
        }
        */
    }
};
</script>

<style lang="scss">
</style>
