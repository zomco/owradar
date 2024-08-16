'use client'

import React, {useState} from 'react';
import {Button} from "@/components/ui/button";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {AlertCircle} from "lucide-react";
import Script from 'next/script';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Bird,
    Book,
    Bot,
    Code2,
    CornerDownLeft,
    LifeBuoy,
    Mic,
    Paperclip,
    Rabbit,
    Settings,
    Settings2,
    Share,
    SquareTerminal,
    SquareUser,
    Triangle,
    Turtle,
} from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"
import Releases from './release.json';


export default function InstallButton() {
    const [version, updateVersion] = useState<string>("");
    const [radar, updateRadar] = useState<string>("");
    const [radars, updateRadars] = useState<[]>([])
    const [model, updateModel] = useState<string>("");
    return <div>
        <Script
            type="module"
            src="https://unpkg.com/esp-web-tools@10/dist/web/install-button.js?module"
        ></Script>
        <div className="mb-6">
            <div>Welcome to the OwRadar web installer!</div>
            <div>Plug in your ESP to a USB port. We will install OwRadar 0.15.0-b4 to it. </div>
            <div>Hit &quot;Install&quot; and select the correct COM port. </div>
            <div>Get OwRadar installed and connected in less than 3 minutes! </div>
        </div>
        <div className="mb-6">
            <ToggleGroup variant="outline" size="lg" type="single" onValueChange={(value) => updateRadar(value)}>
                {
                    Releases.radars.map((radar, index) => {
                        return <ToggleGroupItem
                            value={radar.name}
                            aria-label={radar.name}
                            key={radar.name}
                        >
                            {radar.name}
                        </ToggleGroupItem>
                    })
                }
            </ToggleGroup>
        </div>
        <div className="mb-6">
            <ToggleGroup variant="outline" size="lg" type="single">
                <ToggleGroupItem value="zero" aria-label="Toggle Model Zero">
                    Zero
                </ToggleGroupItem>
                <ToggleGroupItem value="a4" aria-label="Toggle Model A4">
                    A4
                </ToggleGroupItem>
            </ToggleGroup>
        </div>
        <div className="mb-6">
            <Select>
                <SelectTrigger
                    id="model"
                    className="items-start [&_[data-description]]:hidden"
                >
                    <SelectValue placeholder="Select a model" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="genesis">
                        <div className="flex items-start gap-3 text-muted-foreground">
                            <Rabbit className="size-5" />
                            <div className="grid gap-0.5">
                                <p>
                                    Neural{" "}
                                    <span className="font-medium text-foreground">
                                  Genesis
                                </span>
                                </p>
                                <p className="text-xs" data-description>
                                    Our fastest model for general use cases.
                                </p>
                            </div>
                        </div>
                    </SelectItem>
                    <SelectItem value="explorer">
                        <div className="flex items-start gap-3 text-muted-foreground">
                            <Bird className="size-5" />
                            <div className="grid gap-0.5">
                                <p>
                                    Neural{" "}
                                    <span className="font-medium text-foreground">
                                  Explorer
                                </span>
                                </p>
                                <p className="text-xs" data-description>
                                    Performance and speed for efficiency.
                                </p>
                            </div>
                        </div>
                    </SelectItem>
                    <SelectItem value="quantum">
                        <div className="flex items-start gap-3 text-muted-foreground">
                            <Turtle className="size-5" />
                            <div className="grid gap-0.5">
                                <p>
                                    Neural{" "}
                                    <span className="font-medium text-foreground">
                                  Quantum
                                </span>
                                </p>
                                <p className="text-xs" data-description>
                                    The most powerful model for complex
                                    computations.
                                </p>
                            </div>
                        </div>
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div>
            <esp-web-install-button manifest="">
                <Button slot="activate" className="w-full">Install</Button>
                <Alert slot="unsupported" variant="destructive">
                    <AlertCircle className="h-4 w-4"/>
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        Browser does not work
                    </AlertDescription>
                </Alert>
                <Alert slot="not-allowed" variant="destructive">
                    <AlertCircle className="h-4 w-4"/>
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        HTTPS not allowed
                    </AlertDescription>
                </Alert>
            </esp-web-install-button>
        </div>
    </div>

}