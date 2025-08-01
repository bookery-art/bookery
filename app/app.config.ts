export default defineAppConfig({
    title: 'Bookery',
    ui: {
        navigationMenu: {
            slots: {
                root: 'relative flex gap-1.5 [&>div]:min-w-0',
                list: 'isolate min-w-0',
                label: 'w-full flex items-center gap-1.5 font-semibold text-xs/5 text-highlighted px-2.5 py-1.5',
                item: 'min-w-0 mx-2 uppercase navbar-link self-center',
                link: 'group relative w-full h-full flex items-center align-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2 hover:navbar-link-item',
                linkLeadingIcon: 'shrink-0 size-5',
                linkLeadingAvatar: 'shrink-0',
                linkLeadingAvatarSize: '2xs',
                linkTrailing: 'group ms-auto inline-flex gap-1.5 items-center',
                linkTrailingBadge: 'shrink-0',
                linkTrailingBadgeSize: 'sm',
                linkTrailingIcon: 'size-5 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200',
                linkLabel: 'truncate',
                linkLabelExternalIcon: 'inline-block size-3 align-top text-dimmed',
                childList: 'isolate',
                childLabel: 'text-xs text-highlighted',
                childItem: 'my-2 mx-2',
                childLink: 'group relative size-full flex items-start text-start text-sm before:absolute before:z-[-1] before:rounded-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2',
                childLinkWrapper: 'min-w-0 my-2',
                childLinkIcon: 'size-5 shrink-0',
                childLinkLabel: 'truncate',
                childLinkLabelExternalIcon: 'inline-block size-3 align-top text-dimmed',
                childLinkDescription: 'text-muted',
                separator: 'px-2 h-px bg-border'
            },
            variants: {
                compoundVariants: [{
                    color: 'primary',
                    variant: 'link',
                    active: true,
                    class: {
                        link: 'navbar-link-item',
                        linkLeadingIcon: 'text-primary group-data-[state=open]:text-primary'
                    }
            }]},  
    }
}})