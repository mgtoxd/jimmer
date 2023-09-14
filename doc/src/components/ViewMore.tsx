import React, { FC, memo, MouseEvent, PropsWithChildren, useCallback, useState } from "react";
import Button  from "@mui/material/Button";
import { ViewDialog } from "./ViewDialog";

export const ViewMore: FC<
    PropsWithChildren<{
        readonly buttonText: string,
        readonly fullScreen?: boolean,
        readonly title?: string
    }>
> = memo(({buttonText, fullScreen = false, title = buttonText, children}) => {
    
    const [open, setOpen] = useState(false);

    const onButtonClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        setOpen(true);
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            (e as any).cancelBubble = true;
        }
    }, []);
    
    const onClose = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <>
            <Button data-is-view-more-button="true" onClick={onButtonClick} variant="outlined" size="small">{buttonText}</Button>
            <ViewDialog open={open} onClose={onClose} title={title} fullScreen={fullScreen}>
                {children}
            </ViewDialog>
        </>
    );
});

