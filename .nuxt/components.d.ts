
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'Hero': typeof import("../components/Hero.vue")['default']
    'LoadingCard': typeof import("../components/LoadingCard.vue")['default']
    'LoadingPlaceholder': typeof import("../components/LoadingPlaceholder.vue")['default']
    'Navbar': typeof import("../components/Navbar.vue")['default']
    'PageHero': typeof import("../components/PageHero.vue")['default']
    'ProjectDescription': typeof import("../components/ProjectDescription.vue")['default']
    'SiteFooter': typeof import("../components/SiteFooter.vue")['default']
    'ThemeToggler': typeof import("../components/ThemeToggler.vue")['default']
    'WorksSection': typeof import("../components/WorksSection.vue")['default']
    'IconsMoon': typeof import("../components/icons/moon.vue")['default']
    'IconsSun': typeof import("../components/icons/sun.vue")['default']
    'IconsSystem': typeof import("../components/icons/system.vue")['default']
    'BAccordion': typeof import("../node_modules/bootstrap-vue-3/src/components/BAccordion/BAccordion.vue")['default']
    'BAccordionItem': typeof import("../node_modules/bootstrap-vue-3/src/components/BAccordion/BAccordionItem.vue")['default']
    'BAlert': typeof import("../node_modules/bootstrap-vue-3/src/components/BAlert.vue")['default']
    'BAvatar': typeof import("../node_modules/bootstrap-vue-3/src/components/BAvatar/BAvatar.vue")['default']
    'BAvatarGroup': typeof import("../node_modules/bootstrap-vue-3/src/components/BAvatar/BAvatarGroup.vue")['default']
    'BBadge': typeof import("../node_modules/bootstrap-vue-3/src/components/BBadge/BBadge.vue")['default']
    'BBreadcrumb': typeof import("../node_modules/bootstrap-vue-3/src/components/BBreadcrumb/BBreadcrumb.vue")['default']
    'BBreadcrumbItem': typeof import("../node_modules/bootstrap-vue-3/src/components/BBreadcrumb/BBreadcrumbItem.vue")['default']
    'BButton': typeof import("../node_modules/bootstrap-vue-3/src/components/BButton/BButton.vue")['default']
    'BButtonGroup': typeof import("../node_modules/bootstrap-vue-3/src/components/BButton/BButtonGroup.vue")['default']
    'BButtonToolbar': typeof import("../node_modules/bootstrap-vue-3/src/components/BButton/BButtonToolbar.vue")['default']
    'BButtonBCloseButton': typeof import("../node_modules/bootstrap-vue-3/src/components/BButton/BCloseButton.vue")['default']
    'BCard': typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCard.vue")['default']
    'BCardBody': typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardBody.vue")['default']
    'BCardFooter': typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardFooter.vue")['default']
    'BCardGroup': typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardGroup.vue")['default']
    'BCardHeader': typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardHeader.vue")['default']
    'BCardImg': typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardImg.vue")['default']
    'BCardSubTitle': typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardSubTitle.vue")['default']
    'BCardText': typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardText.vue")['default']
    'BCardTitle': typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardTitle.vue")['default']
    'BCarousel': typeof import("../node_modules/bootstrap-vue-3/src/components/BCarousel/BCarousel.vue")['default']
    'BCarouselSlide': typeof import("../node_modules/bootstrap-vue-3/src/components/BCarousel/BCarouselSlide.vue")['default']
    'BCol': typeof import("../node_modules/bootstrap-vue-3/src/components/BCol.vue")['default']
    'BCollapse': typeof import("../node_modules/bootstrap-vue-3/src/components/BCollapse.vue")['default']
    'BContainer': typeof import("../node_modules/bootstrap-vue-3/src/components/BContainer.vue")['default']
    'BDropdown': typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdown.vue")['default']
    'BDropdownDivider': typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownDivider.vue")['default']
    'BDropdownForm': typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownForm.vue")['default']
    'BDropdownGroup': typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownGroup.vue")['default']
    'BDropdownHeader': typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownHeader.vue")['default']
    'BDropdownItem': typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownItem.vue")['default']
    'BDropdownItemButton': typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownItemButton.vue")['default']
    'BDropdownText': typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownText.vue")['default']
    'BForm': typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BForm.vue")['default']
    'BFormFloatingLabel': typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormFloatingLabel.vue")['default']
    'BFormInvalidFeedback': typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormInvalidFeedback.vue")['default']
    'BFormRow': typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormRow.vue")['default']
    'BFormText': typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormText.vue")['default']
    'BFormValidFeedback': typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormValidFeedback.vue")['default']
    'BFormCheckbox': typeof import("../node_modules/bootstrap-vue-3/src/components/BFormCheckbox/BFormCheckbox.vue")['default']
    'BFormCheckboxGroup': typeof import("../node_modules/bootstrap-vue-3/src/components/BFormCheckbox/BFormCheckboxGroup.vue")['default']
    'BFormGroup': typeof import("../node_modules/bootstrap-vue-3/src/components/BFormGroup/BFormGroup.vue")['default']
    'BFormInput': typeof import("../node_modules/bootstrap-vue-3/src/components/BFormInput/BFormInput.vue")['default']
    'BFormRadio': typeof import("../node_modules/bootstrap-vue-3/src/components/BFormRadio/BFormRadio.vue")['default']
    'BFormRadioGroup': typeof import("../node_modules/bootstrap-vue-3/src/components/BFormRadio/BFormRadioGroup.vue")['default']
    'BFormSelect': typeof import("../node_modules/bootstrap-vue-3/src/components/BFormSelect/BFormSelect.vue")['default']
    'BFormSelectOption': typeof import("../node_modules/bootstrap-vue-3/src/components/BFormSelect/BFormSelectOption.vue")['default']
    'BFormSelectOptionGroup': typeof import("../node_modules/bootstrap-vue-3/src/components/BFormSelect/BFormSelectOptionGroup.vue")['default']
    'BFormTagsBFormTag': typeof import("../node_modules/bootstrap-vue-3/src/components/BFormTags/BFormTag.vue")['default']
    'BFormTags': typeof import("../node_modules/bootstrap-vue-3/src/components/BFormTags/BFormTags.vue")['default']
    'BFormTextarea': typeof import("../node_modules/bootstrap-vue-3/src/components/BFormTextarea/BFormTextarea.vue")['default']
    'BImg': typeof import("../node_modules/bootstrap-vue-3/src/components/BImg.vue")['default']
    'BInputGroup': typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroup.vue")['default']
    'BInputGroupAddon': typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroupAddon.vue")['default']
    'BInputGroupAppend': typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroupAppend.vue")['default']
    'BInputGroupPrepend': typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroupPrepend.vue")['default']
    'BInputGroupText': typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroupText.vue")['default']
    'BLink': typeof import("../node_modules/bootstrap-vue-3/src/components/BLink/BLink.vue")['default']
    'BListGroup': typeof import("../node_modules/bootstrap-vue-3/src/components/BListGroup/BListGroup.vue")['default']
    'BListGroupItem': typeof import("../node_modules/bootstrap-vue-3/src/components/BListGroup/BListGroupItem.vue")['default']
    'BModal': typeof import("../node_modules/bootstrap-vue-3/src/components/BModal.vue")['default']
    'BNav': typeof import("../node_modules/bootstrap-vue-3/src/components/BNav.vue")['default']
    'BNavItem': typeof import("../node_modules/bootstrap-vue-3/src/components/BNavItem.vue")['default']
    'BNavItemDropdown': typeof import("../node_modules/bootstrap-vue-3/src/components/BNavItemDropdown.vue")['default']
    'BOffcanvas': typeof import("../node_modules/bootstrap-vue-3/src/components/BOffcanvas.vue")['default']
    'BOverlay': typeof import("../node_modules/bootstrap-vue-3/src/components/BOverlay/BOverlay.vue")['default']
    'BPagination': typeof import("../node_modules/bootstrap-vue-3/src/components/BPagination/BPagination.vue")['default']
    'BPopover': typeof import("../node_modules/bootstrap-vue-3/src/components/BPopover.vue")['default']
    'BProgress': typeof import("../node_modules/bootstrap-vue-3/src/components/BProgress.vue")['default']
    'BProgressBar': typeof import("../node_modules/bootstrap-vue-3/src/components/BProgressBar.vue")['default']
    'BRow': typeof import("../node_modules/bootstrap-vue-3/src/components/BRow.vue")['default']
    'BSkeleton': typeof import("../node_modules/bootstrap-vue-3/src/components/BSkeleton/BSkeleton.vue")['default']
    'BSkeletonIcon': typeof import("../node_modules/bootstrap-vue-3/src/components/BSkeleton/BSkeletonIcon.vue")['default']
    'BSkeletonTable': typeof import("../node_modules/bootstrap-vue-3/src/components/BSkeleton/BSkeletonTable.vue")['default']
    'BSkeletonWrapper': typeof import("../node_modules/bootstrap-vue-3/src/components/BSkeleton/BSkeletonWrapper.vue")['default']
    'BSpinner': typeof import("../node_modules/bootstrap-vue-3/src/components/BSpinner.vue")['default']
    'BTable': typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTable.vue")['default']
    'BTableSimple': typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTableSimple.vue")['default']
    'BTableBTbody': typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTbody.vue")['default']
    'BTableBTd': typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTd.vue")['default']
    'BTableBTfoot': typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTfoot.vue")['default']
    'BTableBTh': typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTh.vue")['default']
    'BTableBThead': typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BThead.vue")['default']
    'BTableBTr': typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTr.vue")['default']
    'BTabsBTab': typeof import("../node_modules/bootstrap-vue-3/src/components/BTabs/BTab.vue")['default']
    'BTabs': typeof import("../node_modules/bootstrap-vue-3/src/components/BTabs/BTabs.vue")['default']
    'BToast': typeof import("../node_modules/bootstrap-vue-3/src/components/BToast/BToast.vue")['default']
    'BToastBToaster': typeof import("../node_modules/bootstrap-vue-3/src/components/BToast/BToaster.vue")['default']
    'BTransition': typeof import("../node_modules/bootstrap-vue-3/src/components/BTransition/BTransition.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'ColorScheme': typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyHero': LazyComponent<typeof import("../components/Hero.vue")['default']>
    'LazyLoadingCard': LazyComponent<typeof import("../components/LoadingCard.vue")['default']>
    'LazyLoadingPlaceholder': LazyComponent<typeof import("../components/LoadingPlaceholder.vue")['default']>
    'LazyNavbar': LazyComponent<typeof import("../components/Navbar.vue")['default']>
    'LazyPageHero': LazyComponent<typeof import("../components/PageHero.vue")['default']>
    'LazyProjectDescription': LazyComponent<typeof import("../components/ProjectDescription.vue")['default']>
    'LazySiteFooter': LazyComponent<typeof import("../components/SiteFooter.vue")['default']>
    'LazyThemeToggler': LazyComponent<typeof import("../components/ThemeToggler.vue")['default']>
    'LazyWorksSection': LazyComponent<typeof import("../components/WorksSection.vue")['default']>
    'LazyIconsMoon': LazyComponent<typeof import("../components/icons/moon.vue")['default']>
    'LazyIconsSun': LazyComponent<typeof import("../components/icons/sun.vue")['default']>
    'LazyIconsSystem': LazyComponent<typeof import("../components/icons/system.vue")['default']>
    'LazyBAccordion': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BAccordion/BAccordion.vue")['default']>
    'LazyBAccordionItem': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BAccordion/BAccordionItem.vue")['default']>
    'LazyBAlert': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BAlert.vue")['default']>
    'LazyBAvatar': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BAvatar/BAvatar.vue")['default']>
    'LazyBAvatarGroup': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BAvatar/BAvatarGroup.vue")['default']>
    'LazyBBadge': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BBadge/BBadge.vue")['default']>
    'LazyBBreadcrumb': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BBreadcrumb/BBreadcrumb.vue")['default']>
    'LazyBBreadcrumbItem': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BBreadcrumb/BBreadcrumbItem.vue")['default']>
    'LazyBButton': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BButton/BButton.vue")['default']>
    'LazyBButtonGroup': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BButton/BButtonGroup.vue")['default']>
    'LazyBButtonToolbar': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BButton/BButtonToolbar.vue")['default']>
    'LazyBButtonBCloseButton': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BButton/BCloseButton.vue")['default']>
    'LazyBCard': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCard.vue")['default']>
    'LazyBCardBody': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardBody.vue")['default']>
    'LazyBCardFooter': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardFooter.vue")['default']>
    'LazyBCardGroup': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardGroup.vue")['default']>
    'LazyBCardHeader': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardHeader.vue")['default']>
    'LazyBCardImg': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardImg.vue")['default']>
    'LazyBCardSubTitle': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardSubTitle.vue")['default']>
    'LazyBCardText': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardText.vue")['default']>
    'LazyBCardTitle': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardTitle.vue")['default']>
    'LazyBCarousel': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCarousel/BCarousel.vue")['default']>
    'LazyBCarouselSlide': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCarousel/BCarouselSlide.vue")['default']>
    'LazyBCol': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCol.vue")['default']>
    'LazyBCollapse': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCollapse.vue")['default']>
    'LazyBContainer': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BContainer.vue")['default']>
    'LazyBDropdown': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdown.vue")['default']>
    'LazyBDropdownDivider': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownDivider.vue")['default']>
    'LazyBDropdownForm': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownForm.vue")['default']>
    'LazyBDropdownGroup': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownGroup.vue")['default']>
    'LazyBDropdownHeader': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownHeader.vue")['default']>
    'LazyBDropdownItem': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownItem.vue")['default']>
    'LazyBDropdownItemButton': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownItemButton.vue")['default']>
    'LazyBDropdownText': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownText.vue")['default']>
    'LazyBForm': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BForm.vue")['default']>
    'LazyBFormFloatingLabel': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormFloatingLabel.vue")['default']>
    'LazyBFormInvalidFeedback': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormInvalidFeedback.vue")['default']>
    'LazyBFormRow': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormRow.vue")['default']>
    'LazyBFormText': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormText.vue")['default']>
    'LazyBFormValidFeedback': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormValidFeedback.vue")['default']>
    'LazyBFormCheckbox': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormCheckbox/BFormCheckbox.vue")['default']>
    'LazyBFormCheckboxGroup': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormCheckbox/BFormCheckboxGroup.vue")['default']>
    'LazyBFormGroup': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormGroup/BFormGroup.vue")['default']>
    'LazyBFormInput': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormInput/BFormInput.vue")['default']>
    'LazyBFormRadio': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormRadio/BFormRadio.vue")['default']>
    'LazyBFormRadioGroup': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormRadio/BFormRadioGroup.vue")['default']>
    'LazyBFormSelect': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormSelect/BFormSelect.vue")['default']>
    'LazyBFormSelectOption': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormSelect/BFormSelectOption.vue")['default']>
    'LazyBFormSelectOptionGroup': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormSelect/BFormSelectOptionGroup.vue")['default']>
    'LazyBFormTagsBFormTag': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormTags/BFormTag.vue")['default']>
    'LazyBFormTags': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormTags/BFormTags.vue")['default']>
    'LazyBFormTextarea': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormTextarea/BFormTextarea.vue")['default']>
    'LazyBImg': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BImg.vue")['default']>
    'LazyBInputGroup': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroup.vue")['default']>
    'LazyBInputGroupAddon': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroupAddon.vue")['default']>
    'LazyBInputGroupAppend': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroupAppend.vue")['default']>
    'LazyBInputGroupPrepend': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroupPrepend.vue")['default']>
    'LazyBInputGroupText': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroupText.vue")['default']>
    'LazyBLink': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BLink/BLink.vue")['default']>
    'LazyBListGroup': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BListGroup/BListGroup.vue")['default']>
    'LazyBListGroupItem': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BListGroup/BListGroupItem.vue")['default']>
    'LazyBModal': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BModal.vue")['default']>
    'LazyBNav': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BNav.vue")['default']>
    'LazyBNavItem': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BNavItem.vue")['default']>
    'LazyBNavItemDropdown': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BNavItemDropdown.vue")['default']>
    'LazyBOffcanvas': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BOffcanvas.vue")['default']>
    'LazyBOverlay': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BOverlay/BOverlay.vue")['default']>
    'LazyBPagination': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BPagination/BPagination.vue")['default']>
    'LazyBPopover': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BPopover.vue")['default']>
    'LazyBProgress': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BProgress.vue")['default']>
    'LazyBProgressBar': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BProgressBar.vue")['default']>
    'LazyBRow': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BRow.vue")['default']>
    'LazyBSkeleton': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BSkeleton/BSkeleton.vue")['default']>
    'LazyBSkeletonIcon': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BSkeleton/BSkeletonIcon.vue")['default']>
    'LazyBSkeletonTable': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BSkeleton/BSkeletonTable.vue")['default']>
    'LazyBSkeletonWrapper': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BSkeleton/BSkeletonWrapper.vue")['default']>
    'LazyBSpinner': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BSpinner.vue")['default']>
    'LazyBTable': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTable.vue")['default']>
    'LazyBTableSimple': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTableSimple.vue")['default']>
    'LazyBTableBTbody': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTbody.vue")['default']>
    'LazyBTableBTd': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTd.vue")['default']>
    'LazyBTableBTfoot': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTfoot.vue")['default']>
    'LazyBTableBTh': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTh.vue")['default']>
    'LazyBTableBThead': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BThead.vue")['default']>
    'LazyBTableBTr': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTr.vue")['default']>
    'LazyBTabsBTab': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTabs/BTab.vue")['default']>
    'LazyBTabs': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTabs/BTabs.vue")['default']>
    'LazyBToast': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BToast/BToast.vue")['default']>
    'LazyBToastBToaster': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BToast/BToaster.vue")['default']>
    'LazyBTransition': LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTransition/BTransition.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyColorScheme': LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const Hero: typeof import("../components/Hero.vue")['default']
export const LoadingCard: typeof import("../components/LoadingCard.vue")['default']
export const LoadingPlaceholder: typeof import("../components/LoadingPlaceholder.vue")['default']
export const Navbar: typeof import("../components/Navbar.vue")['default']
export const PageHero: typeof import("../components/PageHero.vue")['default']
export const ProjectDescription: typeof import("../components/ProjectDescription.vue")['default']
export const SiteFooter: typeof import("../components/SiteFooter.vue")['default']
export const ThemeToggler: typeof import("../components/ThemeToggler.vue")['default']
export const WorksSection: typeof import("../components/WorksSection.vue")['default']
export const IconsMoon: typeof import("../components/icons/moon.vue")['default']
export const IconsSun: typeof import("../components/icons/sun.vue")['default']
export const IconsSystem: typeof import("../components/icons/system.vue")['default']
export const BAccordion: typeof import("../node_modules/bootstrap-vue-3/src/components/BAccordion/BAccordion.vue")['default']
export const BAccordionItem: typeof import("../node_modules/bootstrap-vue-3/src/components/BAccordion/BAccordionItem.vue")['default']
export const BAlert: typeof import("../node_modules/bootstrap-vue-3/src/components/BAlert.vue")['default']
export const BAvatar: typeof import("../node_modules/bootstrap-vue-3/src/components/BAvatar/BAvatar.vue")['default']
export const BAvatarGroup: typeof import("../node_modules/bootstrap-vue-3/src/components/BAvatar/BAvatarGroup.vue")['default']
export const BBadge: typeof import("../node_modules/bootstrap-vue-3/src/components/BBadge/BBadge.vue")['default']
export const BBreadcrumb: typeof import("../node_modules/bootstrap-vue-3/src/components/BBreadcrumb/BBreadcrumb.vue")['default']
export const BBreadcrumbItem: typeof import("../node_modules/bootstrap-vue-3/src/components/BBreadcrumb/BBreadcrumbItem.vue")['default']
export const BButton: typeof import("../node_modules/bootstrap-vue-3/src/components/BButton/BButton.vue")['default']
export const BButtonGroup: typeof import("../node_modules/bootstrap-vue-3/src/components/BButton/BButtonGroup.vue")['default']
export const BButtonToolbar: typeof import("../node_modules/bootstrap-vue-3/src/components/BButton/BButtonToolbar.vue")['default']
export const BButtonBCloseButton: typeof import("../node_modules/bootstrap-vue-3/src/components/BButton/BCloseButton.vue")['default']
export const BCard: typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCard.vue")['default']
export const BCardBody: typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardBody.vue")['default']
export const BCardFooter: typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardFooter.vue")['default']
export const BCardGroup: typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardGroup.vue")['default']
export const BCardHeader: typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardHeader.vue")['default']
export const BCardImg: typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardImg.vue")['default']
export const BCardSubTitle: typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardSubTitle.vue")['default']
export const BCardText: typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardText.vue")['default']
export const BCardTitle: typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardTitle.vue")['default']
export const BCarousel: typeof import("../node_modules/bootstrap-vue-3/src/components/BCarousel/BCarousel.vue")['default']
export const BCarouselSlide: typeof import("../node_modules/bootstrap-vue-3/src/components/BCarousel/BCarouselSlide.vue")['default']
export const BCol: typeof import("../node_modules/bootstrap-vue-3/src/components/BCol.vue")['default']
export const BCollapse: typeof import("../node_modules/bootstrap-vue-3/src/components/BCollapse.vue")['default']
export const BContainer: typeof import("../node_modules/bootstrap-vue-3/src/components/BContainer.vue")['default']
export const BDropdown: typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdown.vue")['default']
export const BDropdownDivider: typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownDivider.vue")['default']
export const BDropdownForm: typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownForm.vue")['default']
export const BDropdownGroup: typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownGroup.vue")['default']
export const BDropdownHeader: typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownHeader.vue")['default']
export const BDropdownItem: typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownItem.vue")['default']
export const BDropdownItemButton: typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownItemButton.vue")['default']
export const BDropdownText: typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownText.vue")['default']
export const BForm: typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BForm.vue")['default']
export const BFormFloatingLabel: typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormFloatingLabel.vue")['default']
export const BFormInvalidFeedback: typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormInvalidFeedback.vue")['default']
export const BFormRow: typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormRow.vue")['default']
export const BFormText: typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormText.vue")['default']
export const BFormValidFeedback: typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormValidFeedback.vue")['default']
export const BFormCheckbox: typeof import("../node_modules/bootstrap-vue-3/src/components/BFormCheckbox/BFormCheckbox.vue")['default']
export const BFormCheckboxGroup: typeof import("../node_modules/bootstrap-vue-3/src/components/BFormCheckbox/BFormCheckboxGroup.vue")['default']
export const BFormGroup: typeof import("../node_modules/bootstrap-vue-3/src/components/BFormGroup/BFormGroup.vue")['default']
export const BFormInput: typeof import("../node_modules/bootstrap-vue-3/src/components/BFormInput/BFormInput.vue")['default']
export const BFormRadio: typeof import("../node_modules/bootstrap-vue-3/src/components/BFormRadio/BFormRadio.vue")['default']
export const BFormRadioGroup: typeof import("../node_modules/bootstrap-vue-3/src/components/BFormRadio/BFormRadioGroup.vue")['default']
export const BFormSelect: typeof import("../node_modules/bootstrap-vue-3/src/components/BFormSelect/BFormSelect.vue")['default']
export const BFormSelectOption: typeof import("../node_modules/bootstrap-vue-3/src/components/BFormSelect/BFormSelectOption.vue")['default']
export const BFormSelectOptionGroup: typeof import("../node_modules/bootstrap-vue-3/src/components/BFormSelect/BFormSelectOptionGroup.vue")['default']
export const BFormTagsBFormTag: typeof import("../node_modules/bootstrap-vue-3/src/components/BFormTags/BFormTag.vue")['default']
export const BFormTags: typeof import("../node_modules/bootstrap-vue-3/src/components/BFormTags/BFormTags.vue")['default']
export const BFormTextarea: typeof import("../node_modules/bootstrap-vue-3/src/components/BFormTextarea/BFormTextarea.vue")['default']
export const BImg: typeof import("../node_modules/bootstrap-vue-3/src/components/BImg.vue")['default']
export const BInputGroup: typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroup.vue")['default']
export const BInputGroupAddon: typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroupAddon.vue")['default']
export const BInputGroupAppend: typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroupAppend.vue")['default']
export const BInputGroupPrepend: typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroupPrepend.vue")['default']
export const BInputGroupText: typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroupText.vue")['default']
export const BLink: typeof import("../node_modules/bootstrap-vue-3/src/components/BLink/BLink.vue")['default']
export const BListGroup: typeof import("../node_modules/bootstrap-vue-3/src/components/BListGroup/BListGroup.vue")['default']
export const BListGroupItem: typeof import("../node_modules/bootstrap-vue-3/src/components/BListGroup/BListGroupItem.vue")['default']
export const BModal: typeof import("../node_modules/bootstrap-vue-3/src/components/BModal.vue")['default']
export const BNav: typeof import("../node_modules/bootstrap-vue-3/src/components/BNav.vue")['default']
export const BNavItem: typeof import("../node_modules/bootstrap-vue-3/src/components/BNavItem.vue")['default']
export const BNavItemDropdown: typeof import("../node_modules/bootstrap-vue-3/src/components/BNavItemDropdown.vue")['default']
export const BOffcanvas: typeof import("../node_modules/bootstrap-vue-3/src/components/BOffcanvas.vue")['default']
export const BOverlay: typeof import("../node_modules/bootstrap-vue-3/src/components/BOverlay/BOverlay.vue")['default']
export const BPagination: typeof import("../node_modules/bootstrap-vue-3/src/components/BPagination/BPagination.vue")['default']
export const BPopover: typeof import("../node_modules/bootstrap-vue-3/src/components/BPopover.vue")['default']
export const BProgress: typeof import("../node_modules/bootstrap-vue-3/src/components/BProgress.vue")['default']
export const BProgressBar: typeof import("../node_modules/bootstrap-vue-3/src/components/BProgressBar.vue")['default']
export const BRow: typeof import("../node_modules/bootstrap-vue-3/src/components/BRow.vue")['default']
export const BSkeleton: typeof import("../node_modules/bootstrap-vue-3/src/components/BSkeleton/BSkeleton.vue")['default']
export const BSkeletonIcon: typeof import("../node_modules/bootstrap-vue-3/src/components/BSkeleton/BSkeletonIcon.vue")['default']
export const BSkeletonTable: typeof import("../node_modules/bootstrap-vue-3/src/components/BSkeleton/BSkeletonTable.vue")['default']
export const BSkeletonWrapper: typeof import("../node_modules/bootstrap-vue-3/src/components/BSkeleton/BSkeletonWrapper.vue")['default']
export const BSpinner: typeof import("../node_modules/bootstrap-vue-3/src/components/BSpinner.vue")['default']
export const BTable: typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTable.vue")['default']
export const BTableSimple: typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTableSimple.vue")['default']
export const BTableBTbody: typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTbody.vue")['default']
export const BTableBTd: typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTd.vue")['default']
export const BTableBTfoot: typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTfoot.vue")['default']
export const BTableBTh: typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTh.vue")['default']
export const BTableBThead: typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BThead.vue")['default']
export const BTableBTr: typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTr.vue")['default']
export const BTabsBTab: typeof import("../node_modules/bootstrap-vue-3/src/components/BTabs/BTab.vue")['default']
export const BTabs: typeof import("../node_modules/bootstrap-vue-3/src/components/BTabs/BTabs.vue")['default']
export const BToast: typeof import("../node_modules/bootstrap-vue-3/src/components/BToast/BToast.vue")['default']
export const BToastBToaster: typeof import("../node_modules/bootstrap-vue-3/src/components/BToast/BToaster.vue")['default']
export const BTransition: typeof import("../node_modules/bootstrap-vue-3/src/components/BTransition/BTransition.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const ColorScheme: typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyHero: LazyComponent<typeof import("../components/Hero.vue")['default']>
export const LazyLoadingCard: LazyComponent<typeof import("../components/LoadingCard.vue")['default']>
export const LazyLoadingPlaceholder: LazyComponent<typeof import("../components/LoadingPlaceholder.vue")['default']>
export const LazyNavbar: LazyComponent<typeof import("../components/Navbar.vue")['default']>
export const LazyPageHero: LazyComponent<typeof import("../components/PageHero.vue")['default']>
export const LazyProjectDescription: LazyComponent<typeof import("../components/ProjectDescription.vue")['default']>
export const LazySiteFooter: LazyComponent<typeof import("../components/SiteFooter.vue")['default']>
export const LazyThemeToggler: LazyComponent<typeof import("../components/ThemeToggler.vue")['default']>
export const LazyWorksSection: LazyComponent<typeof import("../components/WorksSection.vue")['default']>
export const LazyIconsMoon: LazyComponent<typeof import("../components/icons/moon.vue")['default']>
export const LazyIconsSun: LazyComponent<typeof import("../components/icons/sun.vue")['default']>
export const LazyIconsSystem: LazyComponent<typeof import("../components/icons/system.vue")['default']>
export const LazyBAccordion: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BAccordion/BAccordion.vue")['default']>
export const LazyBAccordionItem: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BAccordion/BAccordionItem.vue")['default']>
export const LazyBAlert: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BAlert.vue")['default']>
export const LazyBAvatar: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BAvatar/BAvatar.vue")['default']>
export const LazyBAvatarGroup: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BAvatar/BAvatarGroup.vue")['default']>
export const LazyBBadge: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BBadge/BBadge.vue")['default']>
export const LazyBBreadcrumb: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BBreadcrumb/BBreadcrumb.vue")['default']>
export const LazyBBreadcrumbItem: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BBreadcrumb/BBreadcrumbItem.vue")['default']>
export const LazyBButton: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BButton/BButton.vue")['default']>
export const LazyBButtonGroup: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BButton/BButtonGroup.vue")['default']>
export const LazyBButtonToolbar: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BButton/BButtonToolbar.vue")['default']>
export const LazyBButtonBCloseButton: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BButton/BCloseButton.vue")['default']>
export const LazyBCard: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCard.vue")['default']>
export const LazyBCardBody: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardBody.vue")['default']>
export const LazyBCardFooter: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardFooter.vue")['default']>
export const LazyBCardGroup: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardGroup.vue")['default']>
export const LazyBCardHeader: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardHeader.vue")['default']>
export const LazyBCardImg: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardImg.vue")['default']>
export const LazyBCardSubTitle: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardSubTitle.vue")['default']>
export const LazyBCardText: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardText.vue")['default']>
export const LazyBCardTitle: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCard/BCardTitle.vue")['default']>
export const LazyBCarousel: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCarousel/BCarousel.vue")['default']>
export const LazyBCarouselSlide: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCarousel/BCarouselSlide.vue")['default']>
export const LazyBCol: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCol.vue")['default']>
export const LazyBCollapse: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BCollapse.vue")['default']>
export const LazyBContainer: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BContainer.vue")['default']>
export const LazyBDropdown: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdown.vue")['default']>
export const LazyBDropdownDivider: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownDivider.vue")['default']>
export const LazyBDropdownForm: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownForm.vue")['default']>
export const LazyBDropdownGroup: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownGroup.vue")['default']>
export const LazyBDropdownHeader: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownHeader.vue")['default']>
export const LazyBDropdownItem: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownItem.vue")['default']>
export const LazyBDropdownItemButton: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownItemButton.vue")['default']>
export const LazyBDropdownText: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BDropdown/BDropdownText.vue")['default']>
export const LazyBForm: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BForm.vue")['default']>
export const LazyBFormFloatingLabel: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormFloatingLabel.vue")['default']>
export const LazyBFormInvalidFeedback: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormInvalidFeedback.vue")['default']>
export const LazyBFormRow: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormRow.vue")['default']>
export const LazyBFormText: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormText.vue")['default']>
export const LazyBFormValidFeedback: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BForm/BFormValidFeedback.vue")['default']>
export const LazyBFormCheckbox: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormCheckbox/BFormCheckbox.vue")['default']>
export const LazyBFormCheckboxGroup: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormCheckbox/BFormCheckboxGroup.vue")['default']>
export const LazyBFormGroup: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormGroup/BFormGroup.vue")['default']>
export const LazyBFormInput: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormInput/BFormInput.vue")['default']>
export const LazyBFormRadio: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormRadio/BFormRadio.vue")['default']>
export const LazyBFormRadioGroup: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormRadio/BFormRadioGroup.vue")['default']>
export const LazyBFormSelect: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormSelect/BFormSelect.vue")['default']>
export const LazyBFormSelectOption: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormSelect/BFormSelectOption.vue")['default']>
export const LazyBFormSelectOptionGroup: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormSelect/BFormSelectOptionGroup.vue")['default']>
export const LazyBFormTagsBFormTag: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormTags/BFormTag.vue")['default']>
export const LazyBFormTags: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormTags/BFormTags.vue")['default']>
export const LazyBFormTextarea: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BFormTextarea/BFormTextarea.vue")['default']>
export const LazyBImg: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BImg.vue")['default']>
export const LazyBInputGroup: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroup.vue")['default']>
export const LazyBInputGroupAddon: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroupAddon.vue")['default']>
export const LazyBInputGroupAppend: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroupAppend.vue")['default']>
export const LazyBInputGroupPrepend: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroupPrepend.vue")['default']>
export const LazyBInputGroupText: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BInputGroup/BInputGroupText.vue")['default']>
export const LazyBLink: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BLink/BLink.vue")['default']>
export const LazyBListGroup: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BListGroup/BListGroup.vue")['default']>
export const LazyBListGroupItem: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BListGroup/BListGroupItem.vue")['default']>
export const LazyBModal: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BModal.vue")['default']>
export const LazyBNav: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BNav.vue")['default']>
export const LazyBNavItem: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BNavItem.vue")['default']>
export const LazyBNavItemDropdown: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BNavItemDropdown.vue")['default']>
export const LazyBOffcanvas: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BOffcanvas.vue")['default']>
export const LazyBOverlay: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BOverlay/BOverlay.vue")['default']>
export const LazyBPagination: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BPagination/BPagination.vue")['default']>
export const LazyBPopover: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BPopover.vue")['default']>
export const LazyBProgress: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BProgress.vue")['default']>
export const LazyBProgressBar: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BProgressBar.vue")['default']>
export const LazyBRow: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BRow.vue")['default']>
export const LazyBSkeleton: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BSkeleton/BSkeleton.vue")['default']>
export const LazyBSkeletonIcon: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BSkeleton/BSkeletonIcon.vue")['default']>
export const LazyBSkeletonTable: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BSkeleton/BSkeletonTable.vue")['default']>
export const LazyBSkeletonWrapper: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BSkeleton/BSkeletonWrapper.vue")['default']>
export const LazyBSpinner: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BSpinner.vue")['default']>
export const LazyBTable: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTable.vue")['default']>
export const LazyBTableSimple: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTableSimple.vue")['default']>
export const LazyBTableBTbody: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTbody.vue")['default']>
export const LazyBTableBTd: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTd.vue")['default']>
export const LazyBTableBTfoot: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTfoot.vue")['default']>
export const LazyBTableBTh: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTh.vue")['default']>
export const LazyBTableBThead: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BThead.vue")['default']>
export const LazyBTableBTr: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTable/BTr.vue")['default']>
export const LazyBTabsBTab: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTabs/BTab.vue")['default']>
export const LazyBTabs: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTabs/BTabs.vue")['default']>
export const LazyBToast: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BToast/BToast.vue")['default']>
export const LazyBToastBToaster: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BToast/BToaster.vue")['default']>
export const LazyBTransition: LazyComponent<typeof import("../node_modules/bootstrap-vue-3/src/components/BTransition/BTransition.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyColorScheme: LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
