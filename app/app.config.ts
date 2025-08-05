export default defineAppConfig({
    ui: {
        drawer: {
            slots: {
                overlay: 'fixed inset-0 bg-elevated/75',
                content: 'fixed bg-default ring ring-default flex focus:outline-none',
                handle: [
                'shrink-0 !bg-accented',
                'transition-opacity'
                ],
                container: 'w-full flex flex-col gap-4 p-4 overflow-y-auto',
                header: '',
                title: 'text-highlighted font-semibold',
                description: 'mt-1 text-muted text-sm',
                body: 'flex-1',
                footer: 'flex flex-col gap-1.5'
            },
        },
        separator: {
            slots: {
                root: 'flex items-center align-center text-center',
                border: 'border-solid',
                container: 'font-medium text-default flex',
                icon: 'shrink-0 size-5',
                avatar: 'shrink-0',
                avatarSize: '2xs',
                label: 'text-sm'
            },
            defaultVariants: {
                color: 'neutral',
                size: 'xs',
                type: 'solid'
            }
        },
        InputMenu: {
            slots: {
                root: 'relative inline-flex items-center',
                base: [
                'rounded-md',
                'transition-colors'
                ],
                leading: 'absolute inset-y-0 start-0 flex items-center',
                leadingIcon: 'shrink-0 text-dimmed',
                leadingAvatar: 'shrink-0',
                leadingAvatarSize: '',
                trailing: 'group absolute inset-y-0 end-0 flex items-center disabled:cursor-not-allowed disabled:opacity-75',
                trailingIcon: 'shrink-0 text-dimmed',
                arrow: 'fill-default',
                content: 'max-h-60 w-(--reka-combobox-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-combobox-content-transform-origin) pointer-events-auto flex flex-col',
                viewport: 'relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1',
                group: 'p-1 isolate',
                empty: 'text-center text-muted',
                label: 'font-semibold text-highlighted',
                separator: '-mx-1 my-1 h-px bg-border',
                item: [
                'group relative w-full flex items-center gap-1.5 p-1.5 text-sm select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50',
                'transition-colors before:transition-colors'
                ],
                itemLeadingIcon: [
                'shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default',
                'transition-colors'
                ],
                itemLeadingAvatar: 'shrink-0',
                itemLeadingAvatarSize: '',
                itemLeadingChip: 'shrink-0',
                itemLeadingChipSize: '',
                itemTrailing: 'ms-auto inline-flex gap-1.5 items-center',
                itemTrailingIcon: 'shrink-0',
                itemLabel: 'truncate',
                tagsItem: 'px-1.5 py-0.5 rounded-sm font-medium inline-flex items-center gap-0.5 ring ring-inset ring-accented bg-elevated text-default data-disabled:cursor-not-allowed data-disabled:opacity-75',
                tagsItemText: 'truncate',
                tagsItemDelete: [
                'inline-flex items-center rounded-xs text-dimmed hover:text-default hover:bg-accented/75 disabled:pointer-events-none',
                'transition-colors'
                ],
                tagsItemDeleteIcon: 'shrink-0',
                tagsInput: 'flex-1 border-0 bg-transparent placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75'
            },
            },
        input: {
            slots: {
                root: 'relative inline-flex items-center',
                base: [
                'w-full rounded-lg border-0 placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75',
                'transition-colors'
                ],
                leading: 'absolute inset-y-0 start-0 flex items-center',
                leadingIcon: 'shrink-0 text-dimmed',
                leadingAvatar: 'shrink-0',
                leadingAvatarSize: '',
                trailing: 'absolute inset-y-0 end-0 flex items-center',
                trailingIcon: 'shrink-0 text-dimmed'
            },
        },
        formField: {
            slots: {
                root: '',
                wrapper: '',
                labelWrapper: 'flex content-center items-center justify-between',
                label: 'block font-medium text-default',
                container: 'mt-1 relative',
                description: 'text-muted',
                error: 'mt-2 text-error',
                hint: 'text-muted',
                help: 'mt-2 text-muted'
            },
        },
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
            orientation: {
                horizontal: {
                    root: 'items-center justify-between',
                    list: 'flex items-center',
                    item: 'py-2',
                    link: 'px-2.5 py-1.5 before:inset-x-px before:inset-y-0',
                    childList: 'grid p-2',
                    childLink: 'px-3 py-2 gap-2 before:inset-x-px before:inset-y-0',
                    childLinkLabel: 'font-medium',
                    content: 'absolute top-0 left-0 w-full max-h-[70vh] overflow-y-auto'
                },
                vertical: {
                    root: 'flex-col',
                    link: 'flex-row px-2.5 py-1.5 before:inset-y-px before:inset-x-0',
                    childLabel: 'px-1.5 py-0.5',
                    childLink: 'p-1.5 gap-1.5 before:inset-y-px before:inset-x-0'
                }
        },
        compoundVariants: [
            {
                orientation: 'vertical',
                collapsed: false,
                class: {
                    childList: 'ms-5 border-s border-default',
                    childItem: 'ps-1.5 -ms-px',
                    content: 'data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden'
                }
            },
            {
                orientation: 'vertical',
                collapsed: true,
                class: {
                    link: 'px-1.5',
                    content: 'shadow-sm rounded-sm min-h-6 p-1'
                }
            },
            {
                orientation: 'vertical',
                highlight: true,
                level: true,
                class: {
                    link: [
                    'after:absolute after:-start-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full',
                    'after:transition-colors'
                    ]
                }
            },
        ],  
    }
}})